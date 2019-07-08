

const initialState = {
 amount: [],
 rate: '',
 duration: '',
 total: '',
 interest: ''

}

export default (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_INTEREST':
     return {
      ...state,
 
      total: action.payload.amount + action.payload.rate,
      interest:( action.payload.amount * (action.payload.rate) /100 * action.payload.duration)
     }
     default:
      return state
  }
}

