import './styles/index.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Branding from './components/Branding';

import { loadFonts } from '../../utils/fonts';

declare const HUB_SITE_URL: string;
const hubSiteUrl = HUB_SITE_URL;

const appendBranding = () => {
  const rootUri = `/${hubSiteUrl.split('/').slice(3).join('/')}`.replace(/\/\//g, '/');
  loadFonts(rootUri);

  const noSearchControl = document.getElementById('DeltaPlaceHolderSearchArea').innerHTML.trim().length === 0;
  if (noSearchControl) {
    document.body.className += ' no-search-control';
  }

  const suiteBarEl: HTMLDivElement = document.getElementById('suiteBarTop') as HTMLDivElement;
  const portalBrandingEl = document.createElement('div');

  portalBrandingEl.id = 'portal-branding';
  suiteBarEl.parentNode.insertBefore(portalBrandingEl, suiteBarEl.nextSibling);

  ReactDOM.render(<Branding />, portalBrandingEl);
};

ExecuteOrDelayUntilBodyLoaded(appendBranding);
