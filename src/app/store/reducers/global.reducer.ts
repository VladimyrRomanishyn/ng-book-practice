import { GlobalState, INITIAL_GLOBAL_STATE } from '../states/global.state';
import {CHANGE_GLOBAL_TEST, CLOSE_MODAL_WINDOW, GlobalActions, OPEN_MODAL_WINDOW} from '../actions/global.actions';

export function globalReducer(state = INITIAL_GLOBAL_STATE, action: GlobalActions): GlobalState {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case CHANGE_GLOBAL_TEST :
      newState.test = action.payload;
      return newState;

    case OPEN_MODAL_WINDOW :
      newState.modalWindow = true;
      return newState;

    case CLOSE_MODAL_WINDOW :
      newState.modalWindow = false;
      return newState;
    default:
      return state;
  }
}
