import React,{useState, useEffect, Fragment} from 'react';
import Form from './components/Form'
import './App.css';

function App() {
const [count,total] =useState({
  count: { principle:" ", rate:" ", time:"", total:" "}      // Initials the state 
  
});

/* 
clearInput =()=> {
  const [principle, rate, time]= count;
  console.log(principle)
  total({
       principle,rate,time                                                      //Event if the user clicks the                                                             //button to clear the input forms  
  })
}
 */

  
  return (
    <React.Fragment >
      <Form/>
      
    </React.Fragment>
  );
}

export default App;
