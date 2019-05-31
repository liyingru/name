import { handleActions } from 'redux-actions'
import { UPDATE } from '../types/counter'
const initState = {
  daily: {}
}
export default handleActions({
  [UPDATE] (state, action) {
    return {
      ...state,
      daily: {...action.payload}
    }
  }
}, initState)