import React, { Component, PropTypes } from 'react';

const styles = {
  container: {
    marginBottom: 10
  },
  label: {
    fontSize: 18
  }
};

class Checkbox extends Component {
  handleChange = (event) => {

    this.props.onChange({ [this.props.name]: event.target.checked });
  }

  render() {
    return (
      <div style={styles.container}>
        <label style={styles.label}>
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
