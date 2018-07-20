import * as React from 'react';
import * as ReactDOM from 'react-dom';

import HubNav from './components/HubNav';
import { HubSiteApi, IHubSiteData } from './api';

import { setupPnp } from '../../utils/odata';
import { loadFonts } from '../../utils/fonts';

import './styles/index.scss';

const initHubSiteMenu = () => {
  setupPnp();
  new HubSiteApi()
    .getHubSiteData()
    .then(renderMenu)
    .catch(console.error);
};

const renderMenu = (hubSiteData: IHubSiteData) => {
  // console.log(hubSiteData);
  if (hubSiteData && hubSiteData.navigation) {
    const suiteBarEl: HTMLDivElement = document.getElementById('suiteBarTop') as HTMLDivElement;
    const hubMenuEl = document.createElement('div');

    const isHubSite = hubSiteData.url === _spPageContextInfo.siteAbsoluteUrl;
    if (isHubSite) {
      document.body.className += ' is-hub-site';
    }

    hubMenuEl.id = 'hub-site-menu';
    suiteBarEl.parentNode.insertBefore(hubMenuEl, suiteBarEl.nextSibling);

    ReactDOM.render(<HubNav {...hubSiteData} />, hubMenuEl);
  }
};

ExecuteOrDelayUntilBodyLoaded(initHubSiteMenu);
