import React from 'react';

const ExponentSix = ({ count }) => {
  
  const result = Math.pow(count, 6);

  
  const multiplicationExpression = Array.from({ length: 6 }).map((_, index) => (
    <span key={index}>
      {count} {index < 5 ? '*' : '='}{' '}
    </span>
  ));

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}<sup>6</sup></p>
      <p className="exponent-result">
        {multiplicationExpression}
        <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentSix;
