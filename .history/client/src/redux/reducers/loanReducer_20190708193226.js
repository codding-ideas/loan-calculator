

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
      int

     }
     default:
      return state
  }
}

