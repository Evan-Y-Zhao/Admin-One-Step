import { combineReducers } from 'redux'
import { auth } from './auth'
import { language } from './language'
import { feedback } from './feedback'


const rootReducer = combineReducers({
  language,
  auth,
  feedback,
})

export default rootReducer
