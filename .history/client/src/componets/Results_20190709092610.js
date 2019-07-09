import React from 'react';
import { connect } from 'react-redux';

const Results = (props) => {
    console.log(props.loan.amount)
    return (
        <div>
            <h1>Results:</h1>
            <h4>Amount: $ {props.loan.amount}</h4>
            <h1>Interest Rate: ${props.loan.interestRate}</h1>
            <h1>Amount To pay: ${props.loan. amountToPay}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
     return {
         loan: state.loan
     }
}

export default connect(mapStateToProps, null) (Results)
