import { Action } from '@ngrx/store';

export const CHANGE_GLOBAL_TEST = 'CHANGE_GLOBAL_TEST';

export class ChangeGlobalTestAction implements Action {
  readonly type = CHANGE_GLOBAL_TEST;
  constructor(public payload: any) {}
}

export type GlobalActions = ChangeGlobalTestAction;
