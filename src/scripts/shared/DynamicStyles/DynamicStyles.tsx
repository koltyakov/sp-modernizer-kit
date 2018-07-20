import * as React from 'react';

import { IDynamicStylesProps, IDynamicStylesState } from './Interfaces';

export class DynamicStyles extends React.Component<IDynamicStylesProps, IDynamicStylesState> {

  constructor(props: IDynamicStylesProps) {
    super(props);
    this.state = {
      styles: `
        <style>

          /* Suite bar logo */
          span.o365cs-nav-gallatinLogo.owaimg {
            display: inline-block !important;
            background-image: url(${this.props.siteRelativeUrl}/ContosoImages/logo.png);
            height: 45px;
            width: 188px;
            background-repeat: no-repeat;
            background-size: cover;
            margin-top: 3px;
          }
          .o365cs-nav-bposLogo span.o365cs-nav-brandingText {
            display: none;
          }

        </style>
      `
    };
  }

  public render(): React.ReactElement<IDynamicStylesProps> {
    return (
      <div
        style={{ display: 'none' }}
        dangerouslySetInnerHTML={{ __html: this.state.styles }}
      />
    );
  }

}
