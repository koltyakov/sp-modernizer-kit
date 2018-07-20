import { appConfig } from './env';

const officeUiFabricFontsLoading = 'officeUiFabricFontsLoading';
const officeUiFabricFontsLoaded = 'officeUiFabricFontsLoaded';

export const didFontsLoad = (): boolean => {
  return window[officeUiFabricFontsLoaded] === true;
};

export const loadFonts = async (rootUrl: string = _spPageContextInfo.siteServerRelativeUrl): Promise<void> => {
  if (typeof window[officeUiFabricFontsLoading] === 'undefined') {
    window[officeUiFabricFontsLoading] = true;
    const { initializeIcons } = await import('@uifabric/icons');
    initializeIcons(`${rootUrl}/${appConfig.spFolder}/fonts/`.replace(/\/\//g, '/'));
    window[officeUiFabricFontsLoaded] = true;
  } else {
    await waitForCondition(() => {
      return window[officeUiFabricFontsLoaded] === true;
    });
  }
};

const waitForCondition = (condition: () => boolean): Promise<void> => {
  return new Promise(resolve => {
    if (condition && typeof condition === 'function') {
      condition() ? resolve() : setTimeout(() => {
        resolve(waitForCondition(condition));
      }, 300);
    }
    resolve();
  });
};
