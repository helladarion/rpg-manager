import React, { Component, PropTypes } from 'react';

import { Button, Checkbox, TextArea, DynamicList } from '../../shared/components';

const styles = {
  container: {
    padding: 15
  }
};

class NewPlayerTemplate extends Component {
  handleCreateTemplate = () => {

  }

  render() {
    const { newPlayerTemplate, onUpdate } = this.props;
    return (
      <div style={styles.container}>
        <h2>New Player Template</h2>
        <Checkbox
          label='Display HP Bar'
          name='displayHP'
          value={newPlayerTemplate.get('displayHP')}
          onChange={onUpdate}
        />
        <Checkbox
          label='Display MP Bar'
          name='displayMP'
          value={newPlayerTemplate.get('displayMP')}
          onChange={onUpdate}
        />
        <Checkbox
          label='Display Items Stash'
          name='displayItems'
          value={newPlayerTemplate.get('displayItems')}
          onChange={onUpdate}
        />
        <Checkbox
          label='Display Adventure Log'
          name='displayLog'
          value={newPlayerTemplate.get('displayLog')}
          onChange={onUpdate}
        />
        <TextArea
          name='instructions'
          value={newPlayerTemplate.get('instructions')}
          placeholder='Instructions of the Game'
          onBlur={onUpdate}
        />
        <DynamicList
          name='gameRaces'
          type='Race'
          dynamicList={newPlayerTemplate.get('gameRaces')}
          onUpdate={onUpdate}
        />
        <DynamicList
          name='playerAttributes'
          type='Attributes'
          dynamicList={newPlayerTemplate.get('playerAttributes')}
          onUpdate={onUpdate}
        />
        <Button
          label='Create New Template'
          onClick={this.handleCreateTemplate}
        />
      </div>
    );
  }
}

NewPlayerTemplate.propTypes = {
  newPlayerTemplate: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default NewPlayerTemplate;
