import React, { Component, PropTypes } from 'react';

class Checkbox extends Component {
  handleChange = (event) => {

    this.props.onChange({ [this.props.name]: event.target.checked });
  }

  render() {
    return (
      <div>
        <label>
          <input
            type='checkbox'
            name={this.props.name}
            checked={this.props.value}
            onChange={this.handleChange}
          />
          {this.props.label}
        </label>
      </div>
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
