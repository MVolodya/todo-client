import * as React from 'react';
import { Component } from 'react';
import MenuContainer from 'src/containers/MenuContainer';
import HeaderComponent from './HeaderComponent';

class LeftSideMenuComponent extends Component {

  public render() {
    return (
      <div>
        <HeaderComponent />
        <MenuContainer />
      </div>
    )
  };

};

export default LeftSideMenuComponent;