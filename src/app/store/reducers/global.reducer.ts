import { GlobalState, INITIAL_GLOBAL_STATE } from '../states/global.state';
import { CHANGE_GLOBAL_TEST, GlobalActions } from '../actions/global.actions';

export function globalReducer(state = INITIAL_GLOBAL_STATE, action: GlobalActions): GlobalState {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case CHANGE_GLOBAL_TEST :
      newState.test = action.payload;
      return newState;
    default:
      return state;
  }
}
