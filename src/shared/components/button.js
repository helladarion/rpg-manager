import React, { Component, PropTypes } from 'react';

const styles = {
  button: {
    color: 'white',
    padding: `${10}px ${15}px`,
    fontSize: 15,
    fontWeight: 600,
    width: '100%',
    backgroundColor: '#09b0e2',
    border: 0
  }
};

class Button extends Component {
  render() {
    return (
      <div>
        <button style={styles.button} onClick={this.props.onClick}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
