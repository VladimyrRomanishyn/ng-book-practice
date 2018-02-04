import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../states/application.state';
import { globalReducer } from './global.reducer';

export const reducers: ActionReducerMap<ApplicationState> = {
  globalState: globalReducer
}
