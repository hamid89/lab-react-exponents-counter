import React from 'react';

const Exponent = ({ num, exponent }) => {
  
  const result = num ** exponent;

 
  const multiplicationExpression = Array.from({ length: exponent }).map((_, index) => (
    <span key={index}>
      {num} {index < exponent - 1 ? '*' : '='}{' '}
    </span>
  ));

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}<sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {multiplicationExpression}
        <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default Exponent;
