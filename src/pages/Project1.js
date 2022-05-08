import React from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Projet from "../components/Projet";

const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Logo />
        <Navigation />
        <Projet projectNumber={0} />
        <Button left={"/"} right={"/projet2"} />
      </div>
    </main>
  );
};

export default Project1;
