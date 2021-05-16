import React from 'react';

function Button({ onClick }) {
  return (
    <button className='NewQuoteButton' onClick={onClick}>
      {' '}
      New Quote{' '}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='ButtonIcon'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 5l7 7-7 7M5 5l7 7-7 7'
        />
      </svg>
    </button>
  );
}

export default Button;
