

const initialState = {
//  amount: [],
//  rate: '',
//  convertedRate: '',
//  duration: '',
//  interestRate: '',
//  amountToPay: ''

 amount:'',
 amount: ''
 

}

export default (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_INTEREST':
     return {
      ...state,
       numam1: action.payload.amount,
       num2: action.payload.rate

     }
     default:
      return state
  }
}

