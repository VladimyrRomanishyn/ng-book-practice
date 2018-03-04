export interface GlobalState  {
  test: string;
  modalWindow: boolean;
}

export const INITIAL_GLOBAL_STATE: GlobalState = {
  test: undefined,
  modalWindow: false
}
