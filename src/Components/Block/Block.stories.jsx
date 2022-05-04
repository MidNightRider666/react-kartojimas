import React from "react";
import Block from "./Block";


export const Primary = () => <Block type="primary">Some Text</Block>
export const Succes = () => <Block type="success">Some more Text</Block>
export const Danger = () => <Block type="danger">YES</Block>

export default {
  title: "Block",
  component: Block,
};