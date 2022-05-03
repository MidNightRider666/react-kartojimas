import React from 'react'
import PropTypes from 'prop-types'
import * as stl from "./Button.style"

const colors = {
    primary: {
      background: "blue",
      color: "#fff",
    },
    success: {
      background: "green",
      color: "#fff",
    },
    danger: {
        background: "red",
        color: "#fff",
    }
  };

const Button = ({type, children}) => {
  return <stl.Button type={colors[type]}>{children}</stl.Button>
};
Button.propTypes = {
    type: PropTypes.oneOf(["primary", "success","danger"]),
    children: PropTypes.node.isRequired
}

export default Button;