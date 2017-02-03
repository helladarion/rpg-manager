import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

class TextInput extends Component {
  handleBlur = (event) => {
    this.props.onBlur({ [this.props.name]: event.target.value });
  }

  render() {
    return (
      <TextField
        hintText={this.props.placeholder}
        floatingLabelText={this.props.label}
        onBlur={this.handleBlur}
        defaultValue={this.props.value}
        fullWidth
      />
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func.isRequired
};

export default TextInput;
