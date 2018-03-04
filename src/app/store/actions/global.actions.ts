import { Action } from '@ngrx/store';

export const CHANGE_GLOBAL_TEST = 'CHANGE_GLOBAL_TEST';
export const OPEN_MODAL_WINDOW = 'OPEN_MODAL_WINDOW';
export const CLOSE_MODAL_WINDOW = 'CLOSE_MODAL_WINDOW';

export class ChangeGlobalTestAction implements Action {
  readonly type = CHANGE_GLOBAL_TEST;

  constructor(public payload: any) {}
}

export class OpenModalWindowAction implements Action {
  readonly type = OPEN_MODAL_WINDOW;

  constructor(public payload?: any) {}
}

export class CloseModalWindowAction implements Action {
  readonly type = CLOSE_MODAL_WINDOW;

  constructor(public payload?: any) {}
}

export type GlobalActions = ChangeGlobalTestAction
  | OpenModalWindowAction
  | CloseModalWindowAction;
