import React from 'react';

const ExponentTwo = ({ count }) => {
  
  const result = Math.pow(count, 2);

  
  const multiplicationExpression = Array.from({ length: 2 }).map((_, index) => (
    <span key={index}>
      {count} {index < 1 ? '*' : '='}{' '}
    </span>
  ));

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}<sup>2</sup></p>
      <p className="exponent-result">
        {multiplicationExpression}
        <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
