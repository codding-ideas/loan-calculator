

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
 
      total: (action.payload.amount)  * (action.payload.rate)/100 * (action.payload.duration),
      interest:( action.payload.amount * (action.payload.rate) /100 * action.payload.duration) + action.payload.amount,
      convertedRate: action.payload.rate / 100,
      amountToPay : 
     }
     default:
      return state
  }
}

