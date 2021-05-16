import { useState } from 'react';
import QuoteBox from './components/QuoteBox';
import { random } from 'lodash';

function App() {
  const [bgUrl, setbgUrl] = useState(
    "url('https://source.unsplash.com/random')"
  );

  const bgArray = [
    ["url('https://source.unsplash.com/1600x900/?nature,water')"],
    ["url('https://source.unsplash.com/1600x900/?children,play')"],
    ["url('https://source.unsplash.com/1600x900/?success')"],
    ["url('https://source.unsplash.com/1600x900/?forest')"],
    ["url('https://source.unsplash.com/1600x900/?fashion')"],
    ["url('https://source.unsplash.com/1600x900/?suits')"],
    ["url('https://source.unsplash.com/1600x900/?city')"],
    ["url('https://source.unsplash.com/1600x900/?fitness')"],
    ["url('https://source.unsplash.com/1600x900/?storm')"],
    ["url('https://source.unsplash.com/1600x900/?animals')"],
    ["url('https://source.unsplash.com/1600x900/?mountains')"],
    ["url('https://source.unsplash.com/1600x900/?running')"],
    ["url('https://source.unsplash.com/1600x900/?business')"],
    ["url('https://source.unsplash.com/1600x900/?working')"],
    ["url('https://source.unsplash.com/1600x900/?race')"],
    ["url('https://source.unsplash.com/1600x900/?cars')"],
    ["url('https://source.unsplash.com/1600x900/?rich')"],
    ["url('https://source.unsplash.com/1600x900/?fashionable')"],
    ["url('https://source.unsplash.com/1600x900/?construction')"],
    ["url('https://source.unsplash.com/1600x900/?building')"],
    ["url('https://source.unsplash.com/1600x900/?growth')"],
    ["url('https://source.unsplash.com/1600x900/?ocean')"],
    ["url('https://source.unsplash.com/1600x900/?river')"],
  ];

  const style = {
    '--url': bgUrl,
  };

  const changeBg = () => {
    const randomNum = random(0, bgArray.length);
    setbgUrl(bgArray[randomNum]);
  };

  return (
    <div className='App' style={style}>
      <QuoteBox changeBg={changeBg} />
    </div>
  );
}

export default App;
