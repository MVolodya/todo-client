import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import CollectionContainer from 'src/containers/CollectionContainer';
import { ICollections } from 'src/interfaces/ICollection.interfaces';

class MenuComponent extends Component<ICollections> {

  public renderLinks() {
    return this.props.collections.map((i)=> <Link key={i.id} to={`/c/${i.id}`}><li>{i.name}</li></Link>)
  }

  public render() {
    return (
      <div>
        <CollectionContainer />
        <div className='collection__links'>
          <ul>{ this.renderLinks() }</ul>
        </div>
      </div>
    )
  };
};

export default MenuComponent;