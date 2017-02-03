import React, { Component, PropTypes } from 'react';

import { TextArea, DynamicList, Checkbox } from '../../shared/components';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  container: {
    padding: 15
  }
};

class NewPlayerTemplate extends Component {
  render() {
    const { newPlayerTemplate, onUpdate } = this.props;
    return (
      <Card>
        <CardTitle title='New Player Template' />
        <CardText>
          <Checkbox
            label='Display HP Bar'
            name='displayHP'
            checked={newPlayerTemplate.get('displayHP')}
            onChange={onUpdate}
          />
          <Checkbox
            label='Display MP Bar'
            name='displayMP'
            checked={newPlayerTemplate.get('displayMP')}
            onChange={onUpdate}
          />
          <Checkbox
            label='Display Items Stash'
            name='displayItems'
            checked={newPlayerTemplate.get('displayItems')}
            onChange={onUpdate}
          />
          <Checkbox
            label='Display Adventure Log'
            name='displayLog'
            checked={newPlayerTemplate.get('displayLog')}
            onChange={onUpdate}
          />
          <TextArea
            label='Instructions'
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
        </CardText>
        <CardActions>
          <Link to='/dungeon_master'>
            <FlatButton label='Go Back'  />
          </Link>
        </CardActions>
      </Card>
    );
  }
}

NewPlayerTemplate.propTypes = {
  newPlayerTemplate: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default NewPlayerTemplate;
