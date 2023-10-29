import React from 'react';
import PropTypes from "prop-types"

const Button = ({ variant = 'primary', size = 'medium', color = 'blue', label = 'Button'}) => {

    const buttonStyles = {
      backgroundColor: variant === 'primary' ? color : 'white',
      border: `2px solid ${variant === 'secondary' ? color : 'transparent'}`,
      color: variant !== 'primary' ? color : 'black',
      textDecoration: variant === 'text' ? 'underline' : 'none',
      fontSize: size === 'small' ? '12px' : size === 'medium' ? '16px' : '20px',
      padding: '10px 20px',
      cursor: 'pointer',
      borderRadius: "8px",
    };
  
    return (
      <button style={buttonStyles} >
        {label}
      </button>
    );
};

Button.prototype = {
    variant: PropTypes.oneOf(["primary", "secondary", "text"]).isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default Button;
