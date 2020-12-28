import React from "react";
import "./AppHeading.scss";

const AppHeading = ({ heading }) => {
  return <h1 className="app-heading app-heading--sm">{heading}</h1>;
};

export default AppHeading;
