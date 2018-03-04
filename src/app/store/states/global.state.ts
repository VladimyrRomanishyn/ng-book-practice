export interface GlobalState  {
  test: string;
  modalWindow: string;
}

export const INITIAL_GLOBAL_STATE: GlobalState = {
  test: undefined,
  modalWindow: 'false'
}
