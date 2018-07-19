import * as React from 'react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

import { IBrandingProps } from './Interfaces';

import './Component.scss';

class HubNav extends React.Component<IBrandingProps> {

  public constructor(props: IBrandingProps) {
    super(props);
  }

  public render() {
    return (
      <div className='branding' style={{ display: 'none' }}>
        <Icon iconName='Home' />
      </div>
    );
  }

}

export default HubNav;
