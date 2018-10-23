import * as React from 'react';
import { Component } from 'react';
import { ICollections } from 'src/interfaces/ICollection.interfaces';

interface IProps extends ICollections {
  addCollection: (name: string) => void
};

interface IState {
  value: string
};
class CollectionComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      value: '',
    }

    this.updateValue = this.updateValue.bind(this)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.createCoollection = this.createCoollection.bind(this)
  };

  public render() {
    return (
      <div className='collection collection__header'>
       <input
          type='text'
          placeholder='name of collection'
          value={ this.state.value }
          onChange={ this.onChangeInput }
        />
        <button className='collection__button'onClick={ this.createCoollection }>add</button>
      </div>
    )
  };

    private createCoollection() {
    const value = this.state.value.trim()
    this.props.addCollection(value)
    this.setState({ value: '' })
  };

  private updateValue(value: string) {
    this.setState({ value })
  };

  private onChangeInput(e: any) {
    this.updateValue(e.target.value)
  };

};

export default CollectionComponent;