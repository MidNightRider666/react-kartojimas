import React from "react";
import PropTypes from "prop-types";
import * as Stl from "./Hero.style";

const color = {
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

const Hero = ({ type, children, title }) => {
  return (
    <Stl.Hero type={color[type]}>
      <h2>{children}</h2>
      <p>{title}</p>
    </Stl.Hero>
  );
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["success", "danger", "primary"]),
};

Hero.defaultProps = {
  type: "primary",
};

export default Hero;
