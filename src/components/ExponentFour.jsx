import React from 'react';

const ExponentFour = ({ count }) => {
  
  const result = Math.pow(count, 4);

  
  const multiplicationExpression = Array.from({ length: 4 }).map((_, index) => (
    <span key={index}>
      {count} {index < 3 ? '*' : '='}{' '}
    </span>
  ));

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}<sup>4</sup></p>
      <p className="exponent-result">
        {multiplicationExpression}
        <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentFour
