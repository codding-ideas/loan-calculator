import React,{Fragment, useState, useReducer} from 'react';



const Form = () => {
      
  // Initials the state  */
const [principle, setPrinciple] = useState('');
const [rate, setRate] = useState('');
const [time, setTime] = useState('');
const [total, setTotal] = useState('');
    
  

 const inputChange = event => {


   event.prevent.default();
   
   const { name,value} =event.target;
    
   setUserInput({[name]: value})
   
   console.log(value)
 }

    return(
        <React.Fragment>
           <form>
        <table>
           <caption>Simple Interest Calculator</caption>
           <tbody>
           <tr>
             <td><input type="number" name="principle" 
             placeholder="principle" value={principle}
             onChange={inputChange}/></td>
           </tr>    
           <tr>
             <td><input type="number" name="rate" 
              value={rate}
              placeholder=" rate" onChange={inputChange}/></td>
           </tr> 
           <tr>
             <td><input type="number" name="time" placeholder=" time"
             value={time} onChange={inputChange} /></td>
           </tr>
           <tr>
             <td><input type="number" name="total" placeholder="interest"
              onChange={total} value={userInput.total}
             />{inputChange}</td>
           </tr>   
           </tbody>        
        </table>
        <button>Clear</button>
      </form>
        </React.Fragment>
    )
}

export default Form;