import { Fragment, useEffect } from 'react';

const quotesURL =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const QuoteBox = () => {
  // useState hook

  // Use Effect Hook to fetch API at first render
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  // Fetch randomQuote RestAPI

  const fetchRandomQuote = () => {
    fetch(quotesURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Fragment>
      <div className='QuoteBox'>
        <i class='fas fa-quote-left'></i>
        <p id='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde
          expedita deleniti consequuntur explicabo aut? Quod saepe adipisci,
          porro, facere a delectus laboriosam atque perspiciatis architecto
          necessitatibus, maiores quis repellendus.
        </p>
        <p id='author'> - Somebody</p>
        <br />
        <div class='d-grid gap-4 d-md-flex justify-content-around'>
          {/* <button className="btn btn-primary me-md-2" id="new-quote" onClick={this.generate}>
              New Quote
            </button> */}
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
