import React from 'react';
import { connect } from 'react-redux';

const Results = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Results:</h2>
            <h1>Amount: {props.loan.amount}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
     return {
         loan: state.loan.loan
     }
}

export default connect(mapStateToProps, null) (Results)
