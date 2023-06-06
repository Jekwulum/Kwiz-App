import React, { useEffect, useState } from 'react';
import { batch, useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import SideMenu from '../components/sideMenu/SideMenu';

import { configs } from '../utils/helpers/constants';
import { fetchUserById } from '../store/slice/userSlice';
import { fetchQuestionsByUserId, fetchQuestionsByQuizId } from '../store/slice/quizSlice';
import { Loading } from '../utils/helpers/constants';
import { SphereLoader } from '../components/loaders/SphereLoaders';
import tokenHelper from '../utils/helpers/tokenHelper';
import QuizService from '../utils/services/quiz.service';


const Dashboard = () => {

  const dispatch = useDispatch();
  const [quizCode, setQuizCode] = useState("");
  const [quizCodeQuestions, setQuizCodeQuestions] = useState("");
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([{ question: '', points: 0, options: [''], answer: '' }]);
  const [showAddQuizSection, setAddQuizSection] = useState(false);

  const { user, loadingUser } = useSelector(state => state.user);
  const userId = tokenHelper.getUserId();

  const { userQuestions, quizQuestions,
    loadingUserQuestions, loadingQuizQuestions } = useSelector(state => state.quiz);

  const handleFetchQuizByCode = async (e) => {
    e.preventDefault();
    if (quizCode) {
      const { data: responseData } = await QuizService.getQuestionsByQuizId(quizCode);
      if (responseData.status === Loading.SUCCESS) setQuizCodeQuestions(responseData.data);
    }
  };

  const saveQuiz = async (event) => {
    event.preventDefault();
    const payload = { questions, title: quizTitle };
    const { data: responseData } = await QuizService.cretaeQuiz(payload);
    if (responseData.status === Loading.SUCCESS) {
      toast.success(responseData.message);
    } else {
      toast.error(responseData.message)
    }
  };

  const handleQuestionsChange = (index, question) => {
    // whenever there is a change in a question, update the particular question in the list of questions
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = question;
    setQuestions(updatedQuestions);
  };

  const handlePointsChange = (index, points) => {
    // whenever there is a change in a question's points, update the particular question's points in the list of questions
    const updatedQuestions = [...questions];
    updatedQuestions[index].points = points;
    setQuestions(updatedQuestions);
  }

  const handleOptionChange = (questionIndex, optionIndex, option) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = option;
    setQuestions(updatedQuestions);
  }

  const handleAnswerChange = (questionIndex, answer) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answer = answer;
    setQuestions(updatedQuestions);
  }

  const addQuestion = () => {
    setQuestions([...questions, { question: '', points: 0, options: [''], answer: '' }]);
  }

  const removeQuestion = (index) => {
    if (questions.length <= 1) return;
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  }

  const addOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push('');
    setQuestions(updatedQuestions);
  }

  const removeOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  }

  useEffect(() => {
    batch(() => {
      if (loadingUser !== Loading.SUCCESS) dispatch(fetchUserById(userId));
      if (loadingUserQuestions !== Loading.SUCCESS) dispatch(fetchQuestionsByUserId(userId));
    });
  }, [dispatch]);

  // console.log(userId);
  // console.log(userQuestions);
  // console.log(quizCodeQuestions);

  return (
    <div className='flex min-h-screen'>
      <div className='flex'>
        <SideMenu />
      </div>

      {/* <div> */}
      <div className='w-full'>
        <Header />
        <div>

          <ToastContainer />
          <div className='p-5 font-semibold min-h-screen flex-1 dark:bg-cust-dark-body dark:text-cust-light'>
            <h1 className='text-3xl'>Welcome {user.firstName}</h1>

            <div className='mt-4'>
              <p>What would you like to do today?</p>
              <div className='flex flex-col md:flex-row mt-3 space-y-2 md:space-y-0 mx-auto'>
                <button onClick={(e) => setAddQuizSection(!showAddQuizSection)} className='bg-light-bg h-10 w-60 rounded-lg text-white p-2 text-xs'>Create Quiz</button>
                <div className='space-x-2 md:mx-auto'>
                  <input type="text" placeholder='Enter Quiz Code' onChange={e => setQuizCode(e.target.value)}
                    className='h-8 p-4 w-40 border-2 outline-none align-middle text-center text-light-bg' />
                  <button onClick={e => handleFetchQuizByCode(e)}
                    className='bg-light-bg h-10 w-16 rounded-lg text-white p-2 text-xs'>View</button>
                </div>
              </div>
            </div>
            {showAddQuizSection ?
              <div className='mt-1 rounded-md bg-blue-100 dark:bg-gray-600 w-full md:w-9/12 p-4'>

                <div className='md:mx-auto'>
                  <input type="text" placeholder='Enter Quiz Title' onChange={e => setQuizTitle(e.target.value)}
                    className='h-8 p-2 w-52 outline-none align-middle text-light-bg' value={quizTitle} />
                </div>

                {questions.map((questionObj, questionIndex) => (
                  <div key={questionIndex} className='flex flex-col border-b-4 border-b-light-bg dark:border-b-blue-100 mb-2'>

                    <div>
                      <textarea type="text" value={questionObj.question} placeholder='Question' cols={'40'}
                        onChange={(e) => handleQuestionsChange(questionIndex, e.target.value)}
                        className='border-none my-1 p-2 border-2 outline-none align-middle text-light-bg' />
                    </div>

                    <div>

                      <input type="number" value={questionObj.points} placeholder='Points' name='points'
                        onChange={(e) => handlePointsChange(questionIndex, e.target.value)}
                        className='border-none my-1 p-1 border-2 outline-none align-middle text-light-bg' />
                    </div>

                    {questionObj.options.map((option, optionIndex) => (
                      <div key={optionIndex} className='flexd align-middle items-center'>
                        <input type="text" value={option} placeholder={`Option ${optionIndex + 1}`}
                          onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                          className='border-none h-7 w-72 my-1 p-2 border-2 outline-none align-middle text-light-bg' />
                        <input type="radio" name={`answer-${questionIndex}`} value={option}
                          checked={questionObj.answer === option} className='relative right-5 top-1'
                          onChange={() => handleAnswerChange(questionIndex, option)} />
                        <button onClick={() => removeOption(questionIndex, optionIndex)}><i className="zmdi zmdi-delete w-1 text-red-600"></i></button>
                      </div>
                    ))}

                    <button onClick={() => addOption(questionIndex)}
                      className='bg-green-500 h-10 my-1 w-24 rounded-lg text-white p-2 text-xs'>Add Option</button>
                    {/* <div>
                    <textarea type="text" value={questionObj.answer} placeholder='Answer' cols={'40'}
                      onChange={(e) => handleAnswerChange(questionIndex, e.target.value)}
                      className='border-none my-1 p-2 border-2 outline-none align-middle text-light-bg' />
                  </div> */}
                    <button onClick={() => removeQuestion(questionIndex)}
                      className={`bg-red-500 h-10 my-1 mb-4 w-32 rounded-lg text-white p-2 text-xs`}>Remove Question</button>
                  </div>
                ))}

                <button onClick={addQuestion} className='bg-light-bg h-10 w-24 my-1 rounded-lg text-white p-2 text-xs'>Add Question</button>
                <button onClick={saveQuiz} className='bg-green-500 h-10 w-24 my-1 mx-4 rounded-lg text-white p-1 text-xs'>Save Quiz</button>
              </div>
              : ""}
          </div>
        </div>
        <Footer fixed={!showAddQuizSection} />
      </div>
      {/* </div> */}
    </div>
  )
}

export default Dashboard;