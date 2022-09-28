import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
  
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);

function App() {
  return (
    <div className='App'>
      <h1>HEY!!! THIS IS A COUNTER.</h1>
      <tick></tick>
    </div>
  );
}

export default App;
