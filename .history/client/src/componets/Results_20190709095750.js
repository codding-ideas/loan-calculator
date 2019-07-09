import React from 'react';
import { connect } from 'react-redux';

const Results = (props) => {
    console.log(props.loan.amount)
    return (
        <div>
            <h1>Results:</h1>
            <hr/>
            <h3>Amount: $ {props.loan.amount}</h3>
            <hr/>
            <h3>Interest Rate: ${props.loan.interestRate}</h3>
            <hr/>
            <h3>Amount To pay: ${props.loan. amountToPay}</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
     return {
         loan: state.loan
     }
}

export default connect(mapStateToProps, null) (Results)
