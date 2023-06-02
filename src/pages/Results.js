import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const { score, total } = location.state;
  return (
    <div>
      <div>Results</div>
      <div>
        You scored: {score}/{total}
      </div>
    </div>
  )
}

export default Results;