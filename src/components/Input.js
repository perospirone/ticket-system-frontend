import React from "react";
import PropTypes from 'prop-types';

function Input(props) {
  return <input type={props.type} placeholder={props.placeholder} onChange={({target}) => props.onChange(target.value) } />;
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
