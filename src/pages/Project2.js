import React from "react";
import Button from "../components/Button";
import Navigation from "../components/Navigation";

const Project2 = () => {
  return (
    <div>
      <Navigation />
      <Button left={"/projet1"} right={"/projet3"} />
    </div>
  );
};

export default Project2;
