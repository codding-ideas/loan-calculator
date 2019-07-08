

const initialState = {
//  amount: [],
//  rate: '',
//  convertedRate: '',
//  duration: '',
//  interestRate: '',
//  amountToPay: ''

 amount:'',
 rate: '',
 duration: '',
 interestRate: ''
 

}

export default (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_INTEREST':
     return {
      ...state,
       amount: action.payload.amount,
       rate: parseFloat( action.payload.rate).toFixed(4) / 100,
       duration: action.payload.duration
       interestRate: parseFloat((action.payload.amount) * (action.payload.rate)/100 * (action.payload.duration))

     }
     default:
      return state
  }
}

