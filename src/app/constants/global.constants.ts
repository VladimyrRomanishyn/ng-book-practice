import { environment } from '../../environments/environment';

export const REDUX_DEV_TOOLS_OPTIONS = {
  maxAge: 25,
  logOnly: environment.production
};
