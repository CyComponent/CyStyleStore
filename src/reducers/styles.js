import Immutable, {Map} from 'immutable'
import * as actions from '../actions/stylesActions'


// Def state is just an empty map of Visual Styles
const DEF_STATE = Map({})


export default function styles(state = DEF_STATE, action) {

  switch (action.type) {
    case actions.ADD_STYLE:
      return state.set(action.styleId, Immutable.fromJS(action.style))
    case actions.DELETE_STYLE:
      return state.delete(action.styleId)
    default:
      return state
  }
}
