import QuoteBox from './components/QuoteBox';

function App() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className='App'>
      <QuoteBox refreshPage={refreshPage} />
    </div>
  );
}

export default App;
