import React, { Component, PropTypes } from 'react';

import { Button, TextInput, DeleteButton } from '../../../shared/components';

class GameRaceOptions extends Component {
  constructor(props) {
    super(props);
    this.state = { raceInput: null, raceInputKey: Math.random() };
  }

  handleRaceInputBlur = (changes) => {
    this.setState({ raceInput: changes.race });
  }

  handleAdd = () => {
    const { raceInput } = this.state;
    if (!raceInput) return;
    this.props.onUpdate({ gameRaces: this.props.gameRaces.push(raceInput) });
    this.setState({ raceInput: null, raceInputKey: Math.random() });
  }

  handleDelete = (index) => {
    return () => {
      this.props.onUpdate({ gameRaces: this.props.gameRaces.delete(index) });
    }
  }

  render() {
    const { gameRaces } = this.props;
    return (
      <div>
        <h3>Game Races</h3>
        <TextInput
          name='race'
          key={this.state.raceInputKey}
          onBlur={this.handleRaceInputBlur}
        />
        <Button
          label='Add New Race'
          onClick={this.handleAdd}
        />
        <ul>
          {gameRaces.map((race, index) => {
            return (
              <li key={index}>
                {race}
                <DeleteButton
                  onClick={this.handleDelete(index)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

GameRaceOptions.propTypes = {
  gameRaces: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default GameRaceOptions;
