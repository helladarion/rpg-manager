import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = { stateValue: this.props.value };
  }

  handleChange = (event) => {
    this.setState({ stateValue: event.target.value });
  }

  handleBlur = () => {
    this.props.onBlur({ [this.props.name]: this.state.stateValue });
  }

  render() {
    return (
      <TextField
        hintText={this.props.placeholder}
        floatingLabelText={this.props.label}
        multiLine
        rows={4}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        defaultValue={this.props.value}
        fullWidth
      />
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func.isRequired
};

export default TextArea;
