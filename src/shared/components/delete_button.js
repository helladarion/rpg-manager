import React, { Component, PropTypes } from 'react';

class DeleteButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        <span className='fa fa-times' />
      </button>
    );
  }
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DeleteButton;
