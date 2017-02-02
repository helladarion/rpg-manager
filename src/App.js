import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* Services */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import reducers from './reducers';

/* Components */
import { Button } from './shared/components';
import DungeonMasterIndex from './dungeon_master/components/dungeon_master_index';
import NewPlayerTemplateContainer from './dungeon_master/containers/new_player_template_container';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
        <Link to={'/dungeon_master'}>
          <Button
            label='Dungeon Master'
            onClick={() => {}}
          />
        </Link>

          <Button
            label='Player'
            onClick={() => {}}
          />
        </div>
      </div>
    );
  }
}

class NotFound extends Component {
  render() {
    return (
      <div>Not found</div>
    );
  }
}

class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App} />
          <Route path="/dungeon_master" component={DungeonMasterIndex}/>
          <Route path="/dungeon_master/new_player_template" component={NewPlayerTemplateContainer}/>
          <Route path="*" component={NotFound}/>
        </Router>
      </Provider>
    );
  }
}

export default Routes;
