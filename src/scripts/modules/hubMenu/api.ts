import { SPHttpClient } from '@pnp/sp';

import store from '../../utils/store';

import { IHubSiteData } from './interfaces';
export * from './interfaces';

export class HubSiteApi {

  private client: SPHttpClient;

  public constructor() {
    this.client = new SPHttpClient();
  }

  public getHubSiteData(): Promise<IHubSiteData> {
    if (typeof (_spPageContextInfo || {})['webServerRelativeUrl'] === 'undefined') {
      return Promise.resolve(null);
    }

    const storeKey = `hub-site_${_spPageContextInfo.siteServerRelativeUrl}`;
    const hubDataCache: IHubSiteData = store.get(storeKey);
    if (typeof hubDataCache !== 'undefined') {
      return Promise.resolve(hubDataCache);
    }

    const endpoint = `${_spPageContextInfo.siteServerRelativeUrl}/_api/web/hubsitedata(false)`.replace(/\/\//g, '/');
    return this.client.get(endpoint).then(r => r.json())
      .then(data => {
        if (typeof data['odata.error'] !== 'undefined') {
          throw new Error(data['odata.error'].message.value);
        }
        let hubSiteData: IHubSiteData = null;
        if (typeof data.value === 'string') {
          hubSiteData = JSON.parse(data.value);
        }
        store.set(storeKey, hubSiteData, 10 * 60 * 1000);
        return hubSiteData;
      });
  }

}
