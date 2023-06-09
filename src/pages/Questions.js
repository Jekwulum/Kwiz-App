import React, { useState, useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SideMenu from '../components/sideMenu/SideMenu'

import { Loading } from '../utils/helpers/constants';
import {
  fetchQuestionsByQuizId,
  goToNextQuestion,
  goToPrevQuestion
} from '../store/slice/quizSlice';
import QuizService from '../utils/services/quiz.service';

const Questions = () => {
  const dispatch = useDispatch();
  const [quizId, setQuizId] = useState("");
  const { questions,
    loadingQuizQuestions,
    currentQuestionIndex,
    playerAnswers } = useSelector(state => state.quiz);
  const currentQuestion = loadingQuizQuestions ? questions[currentQuestionIndex] : "";

  const handleFetchQuizByCode = async (e) => {
    e.preventDefault();
    if (quizId) {
      dispatch(fetchQuestionsByQuizId(quizId));
    }
  };

  const handleNextQuestion = () => dispatch(goToNextQuestion());
  const handlePrevQuestion = () => dispatch(goToPrevQuestion());

  useEffect(() => {
    batch(() => {
      if (loadingQuizQuestions === Loading.SUCCESS) {
        // dispatch(fetchQuestionsByQuizId(quizId));
        // setCurrentQuestion(questions[currentQuestionIndex]);
      };
    })
  }, [dispatch]);

  return (
    <div className='flex min-h-screen'>
      <div className='flex'>
        <SideMenu />
      </div>

      <div className='w-full'>
        <Header />

        <div className='p-5 font-semibold min-h-screen flex-1 dark:bg-cust-dark-body dark:text-cust-light'>
          <h1 className='text-3xl'>Questions</h1>

          <div className='space-x-2 md:mx-auto'>
            <input type="text" placeholder='Enter Quiz Code' onChange={e => setQuizId(e.target.value)}
              className='h-8 p-4 w-40 border-2 outline-none align-middle text-center text-light-bg' />
            <button onClick={e => handleFetchQuizByCode(e)}
              className='bg-light-bg h-10 w-16 rounded-lg text-white p-2 text-xs'>View</button>
          </div>

          {(loadingQuizQuestions === Loading.SUCCESS) ?
            <div className='bg-gray-100 w-full p-2 h-5/7 mt-2'>
              {currentQuestion && (
                <div>
                  <h3 className='text-center text-lg text-light-bg italic'>Question-{currentQuestionIndex + 1}/{questions.length}</h3>
                  <h3 className='text-center my-2 text-lg text-light-bg font-bold'>{currentQuestion.question}</h3>
                  <ul className='list-none p-0 space-y-2 my-2'>
                    {currentQuestion.options.map((option, optionIndex) => (
                      <li key={optionIndex} className='flex items-center justify-center'>
                        <label className={`w-3/5 md:w-2/5 py-2 px-4 border text-white bg-light-bg rounded-lg cursor-pointer ${currentQuestion.answer === option ? 'bg-cyan-600' : ''}`}>
                          {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex justify-between items-center px-4">
                <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}
                  className={`h-9 w-24 m-2 rounded-sm text-white font-bold text-lg hover:text-light-bg hover:bg-white ${currentQuestionIndex === 0 ? 'bg-light-bg/[0.7]' : 'bg-light-bg'}`}>Previous</button>
                <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}
                  className={`h-9 w-24 m-2 rounded-sm text-white font-bold text-lg hover:text-light-bg hover:bg-white ${currentQuestionIndex === questions.length - 1 ? 'bg-light-bg/[0.7]' : 'bg-light-bg'}`}>Next</button>
              </div>


            </div> : ""}

        </div>

        <Footer fixed={true} />
      </div>

    </div>
  )
}

export default Questions;