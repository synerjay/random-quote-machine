import { FaQuoteLeft } from 'react-icons/fa';

const Text = ({ quote }: { quote: string }) => {
  return (
    <p className='Text'>
      <FaQuoteLeft /> {quote}
    </p>
  );
};

export default Text;
