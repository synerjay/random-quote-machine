import { Fragment, useEffect, useState } from 'react';
import { random } from 'lodash';
import Text from './Text';
import Author from './Author';
import Links from './Links';

const quotesURL =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const QuoteBox = ({ changeBg }) => {
  // useState hook
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Use Effect Hook to fetch API at first render
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const generateNewQuote = () => {
    changeBg();
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
        <Text quote={quote} />
        <Author author={author} />
        <div className='BottomRow'>
          <Links quote={quote} author={author} />
          <button className='NewQuoteButton' onClick={generateNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default QuoteBox;
