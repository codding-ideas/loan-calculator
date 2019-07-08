import axios from 'axios';

export default (values) => {
   return function(dispatch){
     axios.post('/api/loan')
     .then((loan) => {
      dispatch({
       type: 'CREATE_INTEREST',
       payload: loan.data
      })
     })
   }

}
