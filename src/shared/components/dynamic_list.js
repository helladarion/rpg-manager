import React, { Component, PropTypes } from 'react';
import { Button, TextInput, DeleteButton } from './';


const styles = {
  addItemWrapper: {
    flexDirection: 'row',
    display: 'flex'
  },
  textInputWrapper: {
    flex: 1
  },
  buttonWrapper: {
    width: 50
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
        <h3>{type}</h3>
        <div style={styles.addItemWrapper}>
          <div style={styles.textInputWrapper}>
            <TextInput
              name='dynamicValue'
              key={this.state.dynamicInputKey}
              onBlur={this.handleDynamicInputBlur}
            />
          </div>
          <div style={styles.buttonWrapper}>
            <Button
              label='+'
              onClick={this.handleAdd}
            />
          </div>
        </div>
        <ul>
          {dynamicList.map((item, index) => {
            return (
              <li key={index}>
                {item}
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

DynamicList.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  dynamicList: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default DynamicList;
