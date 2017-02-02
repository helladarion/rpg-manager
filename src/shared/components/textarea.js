import React, { Component, PropTypes } from 'react';

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
