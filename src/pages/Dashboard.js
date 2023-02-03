import React, { useEffect, useState } from 'react';
import { batch, useSelector, useDispatch } from 'react-redux';

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
  // const [quizCodeQuestionsError, setQuizCodeQuestionsError] = useState("");

  const { user, loadingUser } = useSelector(state => state.user);
  const userId = tokenHelper.getUserId();

  const { userQuestions, quizQuestions,
    loadingUserQuestions, loadingQuizQuestions } = useSelector(state => state.quiz);

  const handleFetchQuizByCode = async (e) => {
    e.preventDefault();
    if (quizCode) {
      const { data: responseData } = await QuizService.getQuestionsByQuizId(quizCode);
      if (responseData.status === Loading.SUCCESS) setQuizCodeQuestions(responseData.data);
      // else setQuizCodeQuestionsError(responseData.message)
    }
  };

  useEffect(() => {
    batch(() => {
      if (loadingUser !== Loading.SUCCESS) dispatch(fetchUserById(userId));
      if (loadingUserQuestions !== Loading.SUCCESS) dispatch(fetchQuestionsByUserId(userId));
    });
  }, [dispatch]);

  console.log(userId);
  console.log(userQuestions);
  console.log(quizCodeQuestions);

  return (
    <div className='flex'>
      <SideMenu />

      {/* <div> */}
      <div className='h-screen w-full'>
        <Header />
        <div className='p-7 h-5/6 font-semibold flex-1 dark:bg-cust-dark-body dark:text-cust-light'>
          <h1 className='text-4xl'>Welcome {user.firstName}</h1>

          <div className='mt-8'>
            <p>What would you like to do today?</p>
            <div className='flex flex-col md:flex-row mt-3 gap-4 mx-auto '>
              <button className='bg-light-bg h-10 w-60 rounded-lg text-white p-2 text-xs'>Create Quiz</button>
              <div className='space-x-2 mx-auto'>
                <input type="text" placeholder='Enter Quiz Code' onChange={e => setQuizCode(e.target.value)}
                  className='h-8 p-4 w-40 border-2 outline-none align-middle text-center text-light-bg' />
                <button onClick={e => handleFetchQuizByCode(e)}
                  className='bg-light-bg h-10 w-16 rounded-lg text-white p-2 text-xs'>View</button>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
      {/* </div> */}
    </div>
  )
}

export default Dashboard;