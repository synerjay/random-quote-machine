import React from 'react';
import { FaTwitter } from 'react-icons/fa';

function Link({ children, ...props }) {
  return (
    <a {...props} className='Link' target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
}

function Links({ quote, author }) {
  const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote}" - ${author}`
  )}&hashtags=quotes`;

  return (
    <div className='Links'>
      <Link href={twitterLink} id='tweet-quote'>
        <FaTwitter className='icon' />
      </Link>
    </div>
  );
}

export default Links;
