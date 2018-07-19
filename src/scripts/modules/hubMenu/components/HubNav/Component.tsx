import * as React from 'react';

import HubSiteTitle from '../HubTitle';
import HubNavItem from '../HubNavItem';

import { IHubSiteData } from './Interfaces';

import './Component.module.scss';

class HubNav extends React.Component<IHubSiteData> {

  public constructor(props: IHubSiteData) {
    super(props);
  }

  public render() {
    return (
      <div
        className='ms-HubNav'
        role='navigation'
      >
        <HubSiteTitle {...this.props} />
        <div className='ms-HorizontalNav'>
          <div className='ms-FocusZone' role='presentation'>
            <div className='ms-HorizontalNavItems' role='menubar'>
              {this.props.navigation.map(item => {
                return <HubNavItem {...item} key={item.Id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default HubNav;
