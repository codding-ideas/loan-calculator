

const initialState = {
//  amount: [],
//  rate: '',
//  convertedRate: '',
//  duration: '',
//  interestRate: '',
//  amountToPay: ''

 amount:'',
 rate: '',
 interestRate: ''
 

}

export default (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_INTEREST':
     return {
      ...state,
       amount: action.payload.amount,
       rate: parseFloat( action.payload.rate).toFixed(4) / 100,
       

     }
     default:
      return state
  }
}

