import * as React from 'react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

import { loadFonts } from '../../utils/fonts';

import { IFontsLoaderProps, IFontsLoaderState } from './Interfaces';

export class FontsLoader extends React.Component<IFontsLoaderProps, IFontsLoaderState> {

  constructor(props: IFontsLoaderProps) {
    super(props);
    this.state = { fontsLoaded: false };
  }

  public componentDidMount() {
    loadFonts(this.props.siteRelativeUrl)
      .then(_ => this.setState({ fontsLoaded: true }))
      .catch(console.log);
  }

  public render(): React.ReactElement<IFontsLoaderProps> {
    return (
      <div style={{ display: 'none' }}>
        {this.state.fontsLoaded && this.props.icons.map(iconName => (
          <Icon key={iconName} iconName={iconName} />
        ))}
      </div>
    );
  }

}
