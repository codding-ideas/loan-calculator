

const initialState = {
 amount: [],
 rate: '',
 duration: '',
 interestRate: '',
 amountToPay: ''
 

}

export default (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_INTEREST':
     return {
      ...state,
 
      total: action.payload.amount  * action.payload.rate * action.payload.,
      interest:( action.payload.amount * (action.payload.rate) /100 * action.payload.duration) + action.payload.amount
     }
     default:
      return state
  }
}

