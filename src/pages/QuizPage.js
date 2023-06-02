import React, { useState, useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import {
  fetchQuestionsByQuizId,
  goToNextQuestion,
  goToPrevQuestion,
  savePlayerAnswer
} from '../store/slice/quizSlice';
import { Loading } from '../utils/helpers/constants';
import QuizService from '../utils/services/quiz.service';
import SphereLoader from '../components/loaders/SphereLoaders';
import { GoodTickIcon } from '../components/svgIcons/SVGIcons';

const QuizPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const quizId = location.state;
  const [playerID, setPlayerId] = useState("");
  const [playerIDTaken, setPlayerIDTaken] = useState(false);
  const [showTickIcon, setShowTickIcon] = useState(false);
  const { questions,
    loadingQuizQuestions,
    currentQuestionIndex,
    playerAnswers } = useSelector(state => state.quiz);
  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = () => dispatch(goToNextQuestion());
  const handlePrevQuestion = () => dispatch(goToPrevQuestion());
  const handleAnswer = (questionId, answer) => dispatch(savePlayerAnswer({ questionId, answer }));

  const verifyPlayerID = (event) => {
    event.preventDefault();
    QuizService.getPlayerByQuizIDAndPlayerID(quizId, playerID)
      .then(response => {
        if (response.status === 404) {
          setPlayerIDTaken(false);
          setShowTickIcon(true);
        }
        else {
          setPlayerIDTaken(true);
          setShowTickIcon(false);
        };
      })
  };

  useEffect(() => {
    batch(() => {
      if (loadingQuizQuestions !== Loading.SUCCESS) dispatch(fetchQuestionsByQuizId(quizId));
    })
  }, [dispatch, loadingQuizQuestions]);


  console.log("questions: ", questions);
  return (
    <div>
      <div>
        <NavLink className='text-5xl font-bold text-light-bg'>Kwiz</NavLink>
      </div>

      <div className='mx-auto text-center h-32 w-full'>
        <div className="flex justify-center items-center">
          <input type="text" placeholder='Enter player ID' onChange={e => setPlayerId(e.target.value)} value={playerID}
            className={`md:w-80 h-9 m-2 p-4 border-2 outline-none align-middle text-center text-light-bg ${playerIDTaken ? "border-red-500" : ""}`} />
          <button onClick={verifyPlayerID}
            className='bg-light-bg h-9 w-24 rounded-sm text-white font-bold text-lg'>Play</button>
          {showTickIcon ? <GoodTickIcon /> : ""}
        </div>
        {playerIDTaken ? <p className='text-red-500 text-sm'>Player ID taken!</p> : ""}
        {showTickIcon ?  <p className='text-green-500 text-sm' >Player ID available</p> : ""}
      </div>

      <div className='bg-gray-400 h-96 w-full'></div>
    </div>
  )
}

export default QuizPage;