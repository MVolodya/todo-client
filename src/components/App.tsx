import * as React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import TodoContainer from '../containers/TodoContainer';
import LeftSideMenuComponent from './leftSideMenu/LeftSideMenuComponent';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <div className="nav">
            <LeftSideMenuComponent />
          </div>
          <div className="main">
          <Switch>
            {// tslint:disable-next-line:jsx-no-lambda
            <Route exact={true} path='/' render={()=> <div>Hello</div>}/>}
            <Route path="/c/:collectionId" component={TodoContainer} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
