import React, { useState} from 'react';
import { connect } from 'react-redux';
import { createLoan} from '../../redux/actions/loanAction'

const CalculateInterestForm = (props) => {
  const initialState = {
    amount: "",
    rate: "",
    duration: ""
    
  };

     const [formData, setFormData ] = useState(initialState)

   //Create on change methods
   //This method update the state values
   const onChange = (e) => {
     setFormData({...formData, [e.target.name]: e.target.value})
   }

  //Onsubmit
  const onFormSubmit = e => {
    e.preventDefault();
    props.createLoan(formData);
  };


  return (
    <div className="App">
        <section className="container">
      <h3 className="large text-primary">Calculate your interest Rate</h3>
      <p className="lead"><i className="fas fa-money"></i> Create Your Account</p>
      <form className="form" onSubmit = {onFormSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Amount" name="amount"   onChange = {onChange}/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Rate" name="rate" onChange = {e => onChange(e)} />
         
        </div>
        <small className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </small>
        <div className="form-group">
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange = {onChange}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Calculate" />
      </form>
    </section>
    </div>
  );
}

export default connect(null, {createLoan}) (CalculateInterestForm)
