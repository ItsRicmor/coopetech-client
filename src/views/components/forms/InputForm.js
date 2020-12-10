import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';
import MessageError from './MessageError';
import classNames from 'classnames';

const InputFrom = ({ name, tag: Tag = Input, label, id, value, type, className, placeholder, errors, ...rest }) => (
  <FormGroup>
    {!!label && <Label for={id}>{label}</Label>}
    <Tag
      name={name}
      id={id}
      defaultValue={value}
      value={value}
      type={type}
      placeholder={placeholder}
      className={classNames(className, { 'border-danger': errors[name]?.message })}
      {...rest}
    />
    <MessageError error={errors[name]?.message} className="mt-1" />
  </FormGroup>
);

InputFrom.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

InputFrom.defaultProps = {
  required: false,
  type: 'text',
};

export default InputFrom;
