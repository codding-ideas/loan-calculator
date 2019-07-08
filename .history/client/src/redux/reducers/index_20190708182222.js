import { combineReducer } from 'react-redux';
import loanReducer from './loanReducer'


const rootReducer = combineReducer({
  loanReducer
})

module.exports = rootReducer;