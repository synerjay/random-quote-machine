import React from 'react';
import { FaTwitter } from 'react-icons/fa';

interface LinkProps {
  children: React.ReactChild;
  href: string;
  id: string;
}

function Link({ children, ...props }: LinkProps) {
  return (
    <a {...props} className='Link' target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
}

function Links({ quote, author }: { quote: string; author: string }) {
  const twitterLink: string = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
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
