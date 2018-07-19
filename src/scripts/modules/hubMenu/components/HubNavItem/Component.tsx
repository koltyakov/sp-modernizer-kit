import * as React from 'react';

import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton, IButton } from 'office-ui-fabric-react/lib/Button';

import { INavigationItem } from './Interfaces';

import './Component.module.scss';

class HubNavItem extends React.Component<INavigationItem> {

  private _menuItemRef: IButton;
  private _timeOut: any;

  public constructor(props: INavigationItem) {
    super(props);
    this._mapSubitems = this._mapSubitems.bind(this);
    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onMenuClick = this._onMenuClick.bind(this);
  }

  public render() {
    return (
      <span className='ms-HorizontalNavItem' role='menuitem'>
        <DefaultButton
          className='ms-HorizontalNavItem-link'
          text={this.props.Title}
          onClick={this._onMenuClick}
          onMenuClick={this._onMenuClick}
          onMouseEnter={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}
          componentRef={ref => this._menuItemRef = ref}
          menuProps={this.props.Children.length > 0 ? {
            className: 'ms-HorizontalNav',
            gapSpace: 8,
            items: this.props.Children.map(this._mapSubitems)
          } : null}
        />
      </span>
    );
  }

  private _mapSubitems(navItem: INavigationItem): IContextualMenuItem {
    return {
      key: `${navItem.Id}`,
      name: navItem.Title,
      href: navItem.Url,
      subMenuProps: navItem.Children.length > 0 ? {
        items: navItem.Children.map(this._mapSubitems)
      } : null
    };
  }

  private _onMenuClick() {
    window.location.href = this.props.Url;
  }

  private _onMouseEnter() {
    this._timeOut = setTimeout(() => {
      this._menuItemRef.openMenu();
    }, 300);
  }

  private _onMouseLeave() {
    if (this._timeOut) {
      clearTimeout(this._timeOut);
    }
  }

}

export default HubNavItem;
