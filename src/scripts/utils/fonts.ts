import { initializeIcons } from '@uifabric/icons';

import { isLocalhost, appConfig } from './env';

export const loadFonts = (rootUrl: string = _spPageContextInfo.siteServerRelativeUrl) => {
  if (typeof window['officeUiFabricFontsLoaded'] === 'undefined') {
    window['officeUiFabricFontsLoaded'] = true;
    if (isLocalhost) {
      initializeIcons(`/_tmp/fonts/`.replace(/\/\//g, '/'));
    } else {
      initializeIcons(
        `${rootUrl}/${appConfig.spFolder}/fonts/`
          .replace(/\/\//g, '/')
      );
    }
  }
};
