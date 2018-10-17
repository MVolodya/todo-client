import * as React from 'react';
import { Component } from 'react';

class HeaderComponent extends Component {

  public render() {
    return (
      <div className='header header__info'>
        <h4 className='header__name'>Volodymyr Medvid</h4>
        <h5 className='header__sign-out'>Sign out</h5>
      </div>
    )
  };
};

export default HeaderComponent;