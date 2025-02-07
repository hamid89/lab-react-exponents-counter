import React from 'react';

const ExponentFive = ({ count }) => {
  
  const result = Math.pow(count, 5);

  
  const multiplicationExpression = Array.from({ length: 5 }).map((_, index) => (
    <span key={index}>
      {count} {index < 4 ? '*' : '='}{' '}
    </span>
  ));

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁵</p>
      <p className="exponent-result">
        {multiplicationExpression}
        <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentFive;
