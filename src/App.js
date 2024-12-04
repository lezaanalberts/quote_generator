import './App.css';
import React, {useState} from 'react';

function App(props) {
  const [quote,setQuote] = useState(undefined);

  const getQuote= async()=>{
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
    const options = {
	    method: 'GET',
	    headers: {
      'x-rapidapi-key': 'db0fb0cfcamsh65525489803fe56p1ed472jsn7ca1dcefee7a',
      'x-rapidapi-host': 'quotes15.p.rapidapi.com'
	    }
    };
    try{
      const response= await fetch(url,options);
      setQuote(await response.json());
    } catch(error){
      console.error(error);
    }
  };

  return (
    <div className='App'>
      {!quote && (<button className="button" onClick={()=>
        getQuote ()}>Get Quote!
        </button>)}

      {quote && (
        <div className="quote">
          <h1>{quote.content}</h1>
          <h2>{quote.originator.name}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
