import React from 'react';

const ExponentThree = ({ count }) => {
  
  const result = Math.pow(count, 3);

  
  const multiplicationExpression = Array.from({ length: 3 }).map((_, index) => (
    <span key={index}>
      {count} {index < 2 ? '*' : '='}{' '}
    </span>
  ));

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}<sup>3</sup></p>
      <p className="exponent-result">
        {multiplicationExpression}
        <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentThree;
