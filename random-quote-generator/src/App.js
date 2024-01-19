import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [quoteInfo, setQuoteInfo] = useState({})
  // https://api.quotable.io/random

  useEffect(() => {
    getQuote();
}, [])

const getQuote = () => {
  fetch('https://api.quotable.io/random')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    setQuoteInfo({
      text: data.content,
      author: data.author
    })
  });
};

  return (
    <div className="App">
      <div id="quote-box" style={{
        
        margin: 'auto',
        width: '50%',
        
      }}>
        <p id="text">{quoteInfo.text}</p>
        <p id="author">{quoteInfo.author}</p>
        <button id="new-quote" onClick={getQuote}>New Quote</button>
        <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+ quoteInfo.text}>Tweet Quote</a>

      </div>
    </div>
  );
}

export default App;
