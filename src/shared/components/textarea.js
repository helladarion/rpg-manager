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
      <div>
        <textarea
          style={styles.input}
          rows={8}
          value={this.state.stateValue}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func.isRequired
};

export default TextArea;
