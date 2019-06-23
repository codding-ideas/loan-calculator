import React,{useState, useEffect} from 'react';

import './App.css';

function App() {
const [count,total] =useState({
  count:  { principle:" ", rate:" ", time:"", total:" "}      // Initials the state 
  
});


clearInput =()=> {
  const [principle, rate, time]= count;
  console.log(principle)
  total({
       principle,rate,time                                                      //Event if the user clicks the 
                                                              //button to clear the input forms  
  })
}


  
  return (
    <div >
      <form>
        <table>
           <caption>Simple Interest Calculator</caption>
           <tbody>
           <tr>
             <td><input type="number" value={interest.principle}/></td>
           </tr>
           <tr>
             <td><input type="number" value={interest.rate} /></td>
           </tr>
           <tr>
             <td><input type="number" value={interest.time}/></td>
           </tr>
           <tr>
             <td><input type="number" on /></td>
           </tr>
           </tbody>

          <button /* onClick={clearInput} */ >Clear</button>
        </table>

      </form>
    </div>
  );
}

export default App;
