

const initialState = {
//  amount: [],
//  rate: '',
//  convertedRate: '',
//  duration: '',
//  interestRate: '',
//  amountToPay: ''

 num1:'',
 num2: ''
 

}

export default (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_INTEREST':
     return {
      ...state,
     

     }
     default:
      return state
  }
}

