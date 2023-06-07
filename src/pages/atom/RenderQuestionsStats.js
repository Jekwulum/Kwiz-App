import React from 'react';

const RenderQuestionsStats = ({ stats }) => {
  const { players, questions, titles } = stats;
  return (
    <div className='flex flex-col items-center mx-auto'>
      <h1 className='text-3xl text-light-bg text-center mt-2'>All Quizzes</h1>
      {questions.map((questionObj, questionIndex) => (
        <div key={questionIndex}
          className='flex items-center justify-between w-full md:w-2/5 my-2 text-light-bg rounded-lg p-3 border-2 border-light-bg'>
          <div>
            <div className='text-gray-500'>{titles[questionObj.quizId]} question{titles[questionObj.quizId] > 1 ? "s" : ""}</div>
            <div className='text-2xl text-black'>{questionObj.title}</div>
            {/* <div>ID: {questionObj.quizId}</div> */}
            <div className='text-light-bg'>{players[questionObj.quizId]} player{players[questionObj.quizId] == 1 ? "" : "s"}</div>
          </div>

          <button className='bg-light-bg h-10 w-24 mt-1 rounded-lg text-white p-2 text-xs'>View</button>
        </div>
      ))}
    </div>
  )
}

export default RenderQuestionsStats;