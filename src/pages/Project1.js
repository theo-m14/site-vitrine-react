import React from "react";
import Button from "../components/Button";
import Navigation from "../components/Navigation";

const Project1 = () => {
  return (
    <div>
      <Navigation />
      <Button left={"/"} right={"/projet2"} />
    </div>
  );
};

export default Project1;
