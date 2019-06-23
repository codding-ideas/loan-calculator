import React,{Fragment, useState} from 'react';



const Form = () => {
    return(
        <React.Fragment>
           <form>
        <table>
           <caption>Simple Interest Calculator</caption>
           <tbody>
           <tr>
             <td><input type="number" placeholder=" principle"/></td>
           </tr>    
           <tr>
             <td><input type="number" placeholder=" rate"/></td>
           </tr> 
           <tr>
             <td><input type="number" placeholder=" time"/></td>
           </tr>
           <tr>
             <td><input type="number" placeholder="interest"/></td>
           </tr>   
           </tbody>        
        </table>

      </form>
        </React.Fragment>
    )
}

export default Form;