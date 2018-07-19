import { IAppConfig } from 'sp-build-tasks/dist';

declare const APP_CONFIG: IAppConfig;
export const appConfig: IAppConfig = APP_CONFIG;

export const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname
    .match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);
