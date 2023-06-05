import React, { useState, useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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
    if (playerID !== "") {
      QuizService.getPlayerByQuizIDAndPlayerID(quizId, playerID)
        .then(response => {
          if (response.status === 404) {
            QuizService.addPlayer(quizId, { playerId: playerID })
              .then(response => {
                if (response.status === 201) {
                  setPlayerIDTaken(false);
                  setShowTickIcon(true);
                }
              })
          }
          else {
            setPlayerIDTaken(true);
            setShowTickIcon(false);
          };
        })
    }
  };

  const calculatePoints = () => {
    const questionsCount = questions.length;
    let score = 0;
    let total = 0;

    for (let idx = 0; idx < questionsCount; idx++) {
      const answer_idx = playerAnswers[idx];
      const user_answer = questions[idx].options[answer_idx];
      total += questions[idx].points;

      if (user_answer === questions[idx].answer) {
        score += questions[idx].points;
      }
    }

    return [score, total];
  };

  const submitAnswers = (event) => {
    event.preventDefault();
    const [score, total] = calculatePoints();
    const payload = { score };
    QuizService.updatePlayerScore(quizId, playerID, payload)
      .then(response => {
        if (response.status === 200) {
          navigate('/results', { state: { score, total } });
        }
        else {
        }
      })
  };

  useEffect(() => {
    batch(() => {
      if (loadingQuizQuestions !== Loading.SUCCESS) dispatch(fetchQuestionsByQuizId(quizId));
    })
  }, [dispatch, loadingQuizQuestions]);

  return (
    <div>
      <div className='w-2/7'>
        <div className='my-3 md:my-6 mx-3'>
          <NavLink to='/' className='text-4xl md:text-5xl font-bold text-light-bg'>Kwiz</NavLink>
        </div>

        <div className='mx-auto text-center my-2 md:my-4 w-full'>
          <div className="flex justify-center items-center">
            <input type="text" placeholder='Enter player ID' onChange={e => setPlayerId(e.target.value)} value={playerID}
              className={`md:w-80 h-9 m-2 p-4 border-2 outline-none align-middle text-center text-light-bg ${playerIDTaken ? "border-red-500" : ""}`} />
            <button onClick={verifyPlayerID}
              className='bg-light-bg h-9 w-24 rounded-sm text-white font-bold text-lg hover:text-light-bg hover:bg-gray-400'>Play</button>
            {showTickIcon ? <GoodTickIcon /> : ""}
          </div>
          {playerIDTaken ? <p className='text-red-500 text-sm'>Player ID taken!</p> : ""}
          {/* {showTickIcon ?  <p className='text-green-500 text-sm' >Player ID available</p> : ""} */}
        </div>
      </div>

      {showTickIcon ?
        <div className='bg-gray-300 w-full p-2 h-5/7'>
          {currentQuestion && (
            <div>
              <h3 className='text-center text-lg text-light-bg italic'>Question-{currentQuestionIndex + 1}/{questions.length}</h3>
              <h3 className='text-center my-2 text-lg text-light-bg font-bold'>{currentQuestion.question}</h3>
              <ul className='list-none p-0 space-y-2 my-2'>
                {currentQuestion.options.map((option, optionIndex) => (
                  <li key={optionIndex} className='flex items-center justify-center'>
                    <label className={`w-3/5 md:w-2/5 py-2 px-4 border text-white bg-light-bg rounded-lg cursor-pointer hover:bg-gray-100 hover:text-light-bg ${playerAnswers[currentQuestionIndex] === optionIndex ? 'bg-cyan-600' : ''}`}>
                      <input type="radio" name={"options"} value={optionIndex}
                        checked={playerAnswers[currentQuestionIndex] === optionIndex}
                        onChange={() => handleAnswer(currentQuestionIndex, optionIndex)}
                        className='hidden' />
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

          <div className="flex justify-center items-center">
            <button onClick={submitAnswers}
              className='mx-auto h-9 w-40 rounded-sm text-white font-bold text-lg bg-light-bg m-2 hover:text-light-bg hover:bg-white'>Submit</button>
          </div>
        </div> : <SphereLoader />}
    </div>
  )
}

export default QuizPage;