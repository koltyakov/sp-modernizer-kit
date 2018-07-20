import * as React from 'react';

import { FontsLoader } from '../../../../shared/FontsLoader';
// import { DynamicStyles } from '.../../../../shared/DynamicStyles';

import { IBrandingProps, IBrandingState } from './Interfaces';

import './styles.scss';

export class Branding extends React.Component<IBrandingProps, IBrandingState> {

  constructor(props: IBrandingProps) {
    super(props);
  }

  public render(): React.ReactElement<IBrandingProps> {
    return (
      <div className='branding' style={{ display: 'none' }}>
        <FontsLoader
          icons={[ 'Search', 'ChevronDown' ]}
          siteRelativeUrl={this.props.siteRelativeUrl}
        />
        {/* <DynamicStyles siteRelativeUrl={this.props.siteRelativeUrl} /> */}
      </div>
    );
  }

}
