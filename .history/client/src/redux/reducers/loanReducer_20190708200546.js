

const initialState = {
//  amount: [],
//  rate: '',
//  convertedRate: '',
//  duration: '',
//  interestRate: '',
//  amountToPay: ''

 amount:'',
 rate: ''
 

}

export default (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_INTEREST':
     return {
      ...state,
       amount: action.payload.amount,
       rate: action.payload.rate.t

     }
     default:
      return state
  }
}

