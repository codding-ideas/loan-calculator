

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
 interestRate: '',
 amountToPay: ''

}

export default (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_INTEREST':
     return {
      ...state,
       amount: action.payload.amount,
       rate: parseFloat( action.payload.rate/100).toFixed(3),
       duration: action.payload.duration,
       interestRate: parseFloat((action.payload.amount) * (action.payload.rate/100) * (action.payload.duration)).toFixed(3),


       amountToPay: parseFloat((action.payload.amount) * (action.payload.rate/100) * (action.payload.duration)) +  .toFixed(3)

     }
     default:
      return state
  }
}

