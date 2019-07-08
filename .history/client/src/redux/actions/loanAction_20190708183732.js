import axios from 'axios';

export const createLoan = (values) => {
   return function(dispatch){
     axios.post('/api/loan', values)
     .then((loan) => {
      dispatch({
       type: 'CREATE_INTEREST',
       payload: loan.data
      })
     })
   }

}
