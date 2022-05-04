import React from "react";
import PropTypes from "prop-types";
import * as Stl from "./Block.style";

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

const Block = ({ type, children }) => {
  return <Stl.Block type={color[type]}>{children}</Stl.Block>;
};

Block.propTypes = {
  type: PropTypes.oneOf(["primary", "success", "danger"]),
  children: PropTypes.node.isRequired,
};

Block.defaultProps = {
  type: "primary",
};

export default Block;
