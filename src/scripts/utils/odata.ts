import { sp } from '@pnp/sp';

export const ODataMode = 'application/json;odata=minimalmetadata';

export const setupPnp = () => {
  sp.setup({
    sp: {
      headers: {
        Accept: ODataMode
      }
    }
  });
};
