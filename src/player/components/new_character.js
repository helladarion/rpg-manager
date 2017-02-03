import React, { Component, PropTypes } from 'react';

import { TextArea, DropdownInput, TextInput, DynamicList, Checkbox } from '../../shared/components';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Immutable from 'immutable';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  container: {
    padding: 15
  }
};

class NewCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterName: '',
      templateName: ''
    };
  }

  handleChange = (changes) => {
    this.setState(changes);
  }

  handleCreate = () => {
    this.props.onUpdate({
      characterName: this.state.characterName,
      templateName: this.state.templateName
    });
  }

  render() {
    const { newPlayerTemplates, onUpdate } = this.props;
    console.log(newPlayerTemplates.toJS());
    return (
      <Card>
        <CardTitle title='New Character' />
          <CardText>
          <TextInput
            label='Character Name'
            name='characterName'
            value={this.state.characterName}
            onBlur={this.handleChange}
          />
          <DropdownInput
            label='RPG Character Template'
            options={newPlayerTemplates.map(t => t.get('.key'))}
            name='templateName'
            value={this.state.templateName}
            onChange={this.handleChange}
          />
        </CardText>
        <CardActions>
          <Link to='/player'>
            <FlatButton label='Go Back'  />
          </Link>
          <RaisedButton
            label='Create'
            primary
            onClick={this.handleCreate}
          />
        </CardActions>
      </Card>
    );
  }
}

NewCharacter.propTypes = {
  onUpdate: PropTypes.func.isRequired
};

export default NewCharacter;
