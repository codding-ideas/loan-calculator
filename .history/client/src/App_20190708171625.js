import React, { useState} from 'react';
import Results from '../src/componets/Results';
import CalculateInterestForm from '../src/componets/Forms//CalculateInterestForm'
import './App.css';

function App() {


  return (
    <div>
      
      <CalculateInterestForm/>

      < Results />
    </div>
  )
}

export default App;
