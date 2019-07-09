import React from 'react';
import { connect } from 'react-redux';

const Results = (props) => {
    console.log(props.loan.amount)
    return (
        <div>
            <h1>Results:</h1>
            <h3>Amount: $ {props.loan.amount}</h3>
            <h>Interest Rate: ${props.loan.interestRate}</h>
            <h4>Amount To pay: ${props.loan. amountToPay}</h4>
        </div>
    )
}

const mapStateToProps = (state) => {
     return {
         loan: state.loan
     }
}

export default connect(mapStateToProps, null) (Results)
