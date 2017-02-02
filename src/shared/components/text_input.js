import React, { Component, PropTypes } from 'react';

class TextInput extends Component {
  handleBlur = (event) => {
    this.props.onBlur({ [this.props.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder={this.props.placeholder}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func.isRequired
};

export default TextInput;
