import React, { Component } from 'react';
import logo from './assets/images/sword_shield.png';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* Services */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import reducers from './reducers';

/* Components */
import DungeonMasterIndex from './dungeon_master/components/dungeon_master_index';
import PlayerIndex from './player/components/player_index'
import NewPlayerTemplateContainer from './dungeon_master/containers/new_player_template_container';
import NewCharacterContainer from './player/containers/new_character_container';
import RaisedButton from 'material-ui/RaisedButton';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-primary">RPG Manager</h1>
        </div>
        <div className="App-buttons">
          <div>
            <Link to={'/dungeon_master'}>
              <RaisedButton
                label='Dungeon Master'
                primary
                fullWidth
                onClick={() => {}}
              />
            </Link>
          </div>
          <div>
            <Link to={'/player'}>
              <RaisedButton
                label='Player'
                primary
                fullWidth
                onClick={() => {}}
              />
            </Link>
          </div>
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
      <MuiThemeProvider>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/dungeon_master" component={DungeonMasterIndex}/>
            <Route path="/dungeon_master/new_player_template" component={NewPlayerTemplateContainer}/>
            <Route path="/player" component={PlayerIndex}/>
            <Route path="/player/new_character" component={NewCharacterContainer}/>
            <Route path="*" component={NotFound}/>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default Routes;
