

const initialState = {
 amount: [],
 rate: '',
 convertedRate: '',
 duration: '',
 interestRate: '',
 amountToPay: ''
 

}

export default (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_INTEREST':
     return {
      ...state,
      interestRate: parseInt() action.payload.amount * (action.payload.rate )/100 * action.payload.duration,
      amount: action.payload.amount,
      rate: action.payload.rate,
      duration: action.payload.duration

     }
     default:
      return state
  }
}

