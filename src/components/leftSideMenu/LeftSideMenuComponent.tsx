import * as React from 'react';
import { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import MenuComponent from './MenuComponent';

class LeftSideMenuComponent extends Component {

  public render() {
    return (
      <div>
        <HeaderComponent />
        <MenuComponent />
      </div>
    )
  };

};

export default LeftSideMenuComponent;