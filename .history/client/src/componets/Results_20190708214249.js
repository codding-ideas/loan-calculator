import React from 'react';
import { connect } from 'react-redux';

const Results = (props) => {
    console.log(props.loan.amount)
    return (
        <div>
            <h2>Results:</h2>
            <h1>Amount: {props.loan.amount}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
     return {
         loan: state.loan
     }
}

export default connect(mapStateToProps, null) (Results)
