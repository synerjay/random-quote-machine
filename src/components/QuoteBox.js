import { Fragment, useEffect, useState } from 'react';
import { random } from 'lodash';

const quotesURL =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const QuoteBox = ({ refreshPage }) => {
  // useState hook
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Use Effect Hook to fetch API at first render
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const generateNewQuote = () => {
    refreshPage();
    fetchRandomQuote();
  };

  // Fetch randomQuote RestAPI

  const fetchRandomQuote = () => {
    fetch(quotesURL)
      .then((res) => res.json())
      .then((data) => {
        const quotes = data.quotes;
        // Lodash random method
        const randomNum = random(0, quotes.length);

        setQuote(quotes[randomNum].quote);
        setAuthor(quotes[randomNum].author);
      })
      .catch((err) => {
        console.log(err);
        setAuthor('Jerome Tolentino');
        setQuote(
          'There is something wrong with the random quote machine. Try again later!'
        );
      });
  };

  return (
    <Fragment>
      <div className='QuoteBox'>
        <i className='fas fa-quote-left'></i>
        <h2 id='text'>{quote}</h2>
        <p id='author'> - {author}</p>
        <br />
        <div className='d-grid gap-4 d-md-flex justify-content-around'>
          <button className='NewQuoteButton' onClick={generateNewQuote}>
            New Quote
          </button>
          <a
            className='btn btn-secondary'
            target='_top'
            id='tweet-quote'
            // href={tweetURL}
          >
            <i className='fab fa-twitter'></i> Share
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default QuoteBox;
