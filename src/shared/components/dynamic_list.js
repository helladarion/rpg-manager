import React, { Component, PropTypes } from 'react';
import { Button, TextInput, DeleteButton } from './';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import ChevronRightIcon from 'material-ui/svg-icons/navigation/chevron-right';
import DeleteIcon from 'material-ui/svg-icons/content/remove-circle-outline';


const styles = {
  addItemWrapper: {
    flexDirection: 'row',
    display: 'flex',
    verticalAlign: 'bottom'

  },
  textInputWrapper: {
    flex: 1,
    verticalAlign: 'bottom'

  },
  buttonWrapper: {
    width: 80,
    verticalAlign: 'bottom'
  }
};

class DynamicList extends Component {
  constructor(props) {
    super(props);
    this.state = { dynamicInput: null, dynamicInputKey: Math.random() };
  }

  handleDynamicInputBlur = (changes) => {
    this.setState({ dynamicInput: changes.dynamicValue });
  }

  handleAdd = () => {
    const { dynamicInput } = this.state;
    if (!dynamicInput) return;
    this.props.onUpdate({ [this.props.name]: this.props.dynamicList.push(dynamicInput) });
    this.setState({ dynamicInput: null, dynamicInputKey: Math.random() });
  }

  handleDelete = (index) => {
    return () => {
      this.props.onUpdate({ [this.props.name]: this.props.dynamicList.delete(index) });
    }
  }

  render() {
    const { dynamicList, type } = this.props;
    return (
      <div>
        <div style={styles.addItemWrapper}>
          <div style={styles.textInputWrapper}>
            <TextInput
              label={type}
              name='dynamicValue'
              key={this.state.dynamicInputKey}
              onBlur={this.handleDynamicInputBlur}
            />
          </div>
          <div style={styles.buttonWrapper}>
            <FlatButton label='Add' onClick={this.handleAdd} primary />
          </div>
        </div>
        <List>
          {dynamicList.map((item, index) => {
            return (
              <ListItem
                key={index}
                primaryText={item}
                leftIcon={<ChevronRightIcon />}
                rightIcon={<DeleteIcon />}
                onClick={this.handleDelete(index)}
              />
            );
          })}
        </List>
      </div>
    );
  }
}

DynamicList.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  dynamicList: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default DynamicList;
