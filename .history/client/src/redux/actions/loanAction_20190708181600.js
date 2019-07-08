import axios from 'axios';

export default (values) => {
   return function(dispatch){
     axios.post('/api/loan')
     .then(())
   }

}