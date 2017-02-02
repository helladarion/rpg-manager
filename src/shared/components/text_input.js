import React, { Component, PropTypes } from 'react';

const styles = {
  input: {
    width: '100%',
    fontSize: 20,
    padding: `${7}px ${10}px ${6}px`,
    marginBottom: 10,
    border: `1px solid #e5e5e5`
  }
};

class TextInput extends Component {
  handleBlur = (event) => {
    this.props.onBlur({ [this.props.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          style={styles.input}
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
