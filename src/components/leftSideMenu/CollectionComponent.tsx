import * as React from 'react';
import { Component } from 'react';

class CollectionComponent extends Component {

  public render() {
    return (
      <div className='collection collection__header'>
       <input
          type='text'
          placeholder='name of collection'
        />
        <button className='collection__button'>add</button>
      </div>
    )
  };

};

export default CollectionComponent;