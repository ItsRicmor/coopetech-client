import React from 'react';
import CreatableSelect from 'react-select/creatable';
import SelectInputForm from './SelectInputForm';

const CreatableSelectInputForm = ({ isLoading, onCreateOption, ...rest }) => (
  <SelectInputForm tag={CreatableSelect} isClearable isDisabled={isLoading} isLoading={isLoading} onCreateOption={onCreateOption} {...rest} />
);

export default CreatableSelectInputForm;
