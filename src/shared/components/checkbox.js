import React, { Component, PropTypes } from 'react';
import MuiCheckbox from 'material-ui/Checkbox';

const styles = {
  container: {
    marginBottom: 10
  },
  label: {
    fontSize: 18
  }
};

class Checkbox extends Component {
  handleChange = (event, isInputChecked) => {
    this.props.onChange({ [this.props.name]: isInputChecked });
  }

  render() {
    return (
      <MuiCheckbox
        {...this.props}
        onCheck={this.handleChange}
      />
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
