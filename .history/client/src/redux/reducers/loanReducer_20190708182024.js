

const initialState = {
 amount: [],
 rate: '',
 duration: '',
 total: ''
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_INTEREST':
     return {
      ...state,
      import React, { PureComponent } from 'react'
      
      total: action.payload.amount + action.payload.rate
     }
  }
}