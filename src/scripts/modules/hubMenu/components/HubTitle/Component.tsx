import * as React from 'react';

import { IHubSiteTitleProps } from './Interfaces';

import './Component.scss';

class HubTitle extends React.Component<IHubSiteTitleProps> {

  public constructor(props: IHubSiteTitleProps) {
    super(props);
  }

  public render() {
    return (
      <a
        className='ms-HubNav-nameLink ms-HubNav-link'
        href={this.props.url}
      >
        {this.props.logoUrl && (
          <img className='ms-HubNav-logo' src={this.props.logoUrl} alt='Hub site logo' role='presentation' />
        )}
        <span>{this.props.name}</span>
      </a>
    );
  }

}

export default HubTitle;
