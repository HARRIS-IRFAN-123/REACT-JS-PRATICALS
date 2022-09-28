  import React from 'react'
import './App.css';
import COUNTER from './components/COUNTER.JS';
  function Welcome (props){
    return <h1>HEY!!!, {props.name}</h1>
  }
function App() {
  return (
   <div>
    <Welcome name = "Muazz"/>
    <Welcome name = "Shahbaz"/>
    <Welcome name = "Hamza"/>
    <COUNTER></COUNTER>
   </div>
  );
}

export default App;
