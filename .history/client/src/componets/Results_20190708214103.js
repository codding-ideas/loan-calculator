import React from 'react';
import { connect } from 'react-redux';

const Results = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Results:</h2>
            <h1></h1>
        </div>
    )
}

const mapStateToProps = (state) => {
     return {
         loan: state
     }
}

export default connect(mapStateToProps, null) (Results)
