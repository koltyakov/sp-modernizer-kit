import * as React from 'react';

import HubSiteTitle from '../HubTitle';
import HubNavItem from '../HubNavItem';
import { loadFonts } from '../../../../utils/fonts';

import { IHubSiteData, IHubNavState } from './Interfaces';

import './Component.scss';

class HubNav extends React.Component<IHubSiteData, IHubNavState> {

  public constructor(props: IHubSiteData) {
    super(props);
    this.state = { fontsLoaded: false };
  }

  public componentDidMount() {
    const serverRelativeUrl = `/${this.props.url.split('/').slice(3).join('/')}`.replace(/\/\//g, '/');
    loadFonts(serverRelativeUrl)
      .then(_ => this.setState({ fontsLoaded: true }))
      .catch(console.log);
  }

  public render() {
    return (
      <div
        className='ms-HubNav'
        role='navigation'
      >
        <HubSiteTitle {...this.props} />
        {this.state.fontsLoaded && (
          <div className='ms-HorizontalNav'>
            <div className='ms-FocusZone' role='presentation'>
              <div className='ms-HorizontalNavItems' role='menubar'>
                {this.props.navigation.map(item => {
                  return <HubNavItem {...item} key={item.Id} />;
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

}

export default HubNav;
