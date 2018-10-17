import * as React from 'react';
import TodoContainer from '../containers/TodoContainer';
import LeftSideMenuComponent from './leftSideMenu/LeftSideMenuComponent';

class App extends React.Component {
  public render() {
    return (
      <div className='container'>
        <div className="nav">
          <LeftSideMenuComponent />
        </div>
        <div className="main">
            <TodoContainer />
        </div>
      </div>
      
    );
  }
}

export default App;
