import React from 'react';

const RenderQuestionsStats = ({ stats }) => {
  const { players, questions, titles } = stats;
  return (
    <div>
      <h1 className='text-3xl text-light-bg text-center md:text-left mt-2'>All Quizzes</h1>
      {questions.map((questionObj, questionIndex) => (
        <div key={questionIndex} className='bg-blue-200 my-2 md:w-2/5 text-light-bg rounded-lg p-3'>
          <div>Title: {questionObj.title}</div>
          <div>ID: {questionObj.quizId}</div>
          <div>No of questions: {titles[questionObj.quizId]}</div>
          <div>No of players: {players[questionObj.quizId]}</div>

          <button className='bg-light-bg h-10 w-24 mt-1 rounded-lg text-white p-2 text-xs'>View</button>
        </div>
      ))}
    </div>
  )
}

export default RenderQuestionsStats;