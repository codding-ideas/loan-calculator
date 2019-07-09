import React, { useState} from 'react';
import Results from '../src/componets/Results';
import CalculateInterestForm from '../src/componets/Forms//CalculateInterestForm'
import './App.css';

function App() {


  return (
    <div className='container'>
       < Results />
      <CalculateInterestForm/>

    </div>
  )
}

export default App;
