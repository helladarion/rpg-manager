import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class DropdownInput extends Component {
  handleChange = (event, index, value) => {
    this.props.onChange({ [this.props.name]: value });
  }

  render() {
    const { options, label } = this.props;
    return (
      <SelectField
        floatingLabelText={label}
        value={this.props.value}
        onChange={this.handleChange}
        fullWidth
      >
        {options.map(option => {
          return (
            <MenuItem
              key={options}
              value={option}
              primaryText={option}
            />
          );
        })}
      </SelectField>
    );
  }
}

DropdownInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DropdownInput;
