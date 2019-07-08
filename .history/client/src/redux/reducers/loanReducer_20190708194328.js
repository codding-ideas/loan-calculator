

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
      interestRate: action.payload.amount * (action.payload.rate )/100 * action.payload.duration,
      amount: act

     }
     default:
      return state
  }
}
