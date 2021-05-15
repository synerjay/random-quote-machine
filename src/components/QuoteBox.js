import { Fragment } from 'react';

const QuoteBox = () => {
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
