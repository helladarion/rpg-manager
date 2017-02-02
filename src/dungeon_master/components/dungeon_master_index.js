import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from '../../shared/components';

class DungeonMasterIndex extends Component {
  render() {
    return (
      <Link to='/dungeon_master/new_player_template'>
        <Button label='Create Player Template' />
      </Link>
    );
  }
}

export default DungeonMasterIndex;
