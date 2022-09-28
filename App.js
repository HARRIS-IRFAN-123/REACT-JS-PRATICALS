
import './App.css';
  import React, {useState} from 'react'
  function Counter (){
    const [count,setCount] = useState(0);
    return(
      <div>
        <p>You clicked {count} times .</p>
        <button onClick={() => setCount(count + 1)}>
          CLICK ME.
        </button>
      </div>
    )
  }
function App() {
  return (
    <div className='App'>
        <h1>THIS IS A COUNTER.</h1>
        <Counter></Counter>
    </div>
  );
}

export default App;
