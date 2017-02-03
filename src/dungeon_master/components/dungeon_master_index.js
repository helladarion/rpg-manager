import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class DungeonMasterIndex extends Component {
  render() {
    return (
      <div>
        <Link to='/dungeon_master/new_player_template'>
          <RaisedButton label='Create Player Template' primary fullWidth />
        </Link>
        <Link to='/'>
          <RaisedButton
            label='Go Back'
            fullWidth
          />
        </Link>
      </div>
    );
  }
}

export default DungeonMasterIndex;
