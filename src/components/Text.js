import { FaQuoteLeft } from 'react-icons/fa';

const Text = ({ quote }) => {
  return (
    <p className='Text'>
      <FaQuoteLeft />
      {quote}
    </p>
  );
};

export default Text;
