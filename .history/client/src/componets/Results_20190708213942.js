import React from 'react';
import { connect } from 'react-redux';

const Results = () => {
    return (
        <div>
            <h2>Results:</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
     return {
         loan: state
     }
}

export default Results
