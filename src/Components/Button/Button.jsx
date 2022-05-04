import React from "react";
import PropTypes from "prop-types";
import * as Stl from "./Button.style";

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
  },
};

const Button = ({ type, handleClick, children }) => {
  return (
    <Stl.Button onClick={handleClick} type={colors[type]}>
      {children}
    </Stl.Button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "success", "danger"]),
  handleClick: PropTypes.func.isRequired,
  onclick: PropTypes.oneOf(["submit", "reset", "button"]),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: "primary",
  onclick: "button",
};

export default Button;
