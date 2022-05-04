import React from "react";
import Hero from "./Hero";

export const Success = () => (
  <Hero type="danger" title="Success subtitle" children="Success hero" />
);
export const Danger = () => (
  <Hero type="success" title="Danger subtitle" children="Danger hero" />
);

export default {
  title: "Hero",
  component: Hero,
};
