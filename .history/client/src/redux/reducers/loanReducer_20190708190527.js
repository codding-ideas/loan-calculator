

const initialState = {
 amount: [],
 rate: '',
 duration: '',
 total: '',
 inter

}

export default (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_INTEREST':
     return {
      ...state,
 
      total: action.payload.amount + action.payload.rate
     }
     default:
      return state
  }
}

