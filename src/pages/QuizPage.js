import React from 'react';
import { useLocation } from 'react-router-dom';
import SphereLoader from '../components/loaders/SphereLoaders';

const QuizPage = () => {
  const location = useLocation();
  const data = location.state;
  console.log("data: ", data);
  return (
    <div>QuizPage</div>
  )
}

export default QuizPage;