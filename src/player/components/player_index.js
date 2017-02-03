import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class PlayerIndex extends Component {
  render() {
    return (
      <div>
        <Link to='/player/new_character'>
          <RaisedButton label='Create new Character' primary fullWidth />
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

export default PlayerIndex;
