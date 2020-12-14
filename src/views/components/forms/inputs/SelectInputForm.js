import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import InputContainerFrom from './components/InputContainerForm';
import classNames from 'classnames';

const SelectInputFrom = ({ name, label, id, tag: Tag = Select, value, type, className, placeholder, options, onChange, errors, ...rest }) => (
  <InputContainerFrom label={label} id={id} errors={errors} message>
    <Tag
      isClearable
      name={name}
      id={id}
      value={value}
      type={type}
      onChange={({ value }) => onChange({ name: name, value })}
      placeholder={placeholder}
      options={options}
      className={classNames(className, { 'border-danger': errors[name]?.message })}
      {...rest}
    />
  </InputContainerFrom>
);

SelectInputFrom.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
};

SelectInputFrom.defaultProps = {
  required: false,
  type: 'select',
};

export default SelectInputFrom;
