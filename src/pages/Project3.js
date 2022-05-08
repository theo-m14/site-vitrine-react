import React from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Projet from "../components/Projet";

const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Logo />
        <Navigation />
        <Projet projectNumber={2} />
        <Button left={"/projet2"} right={"/projet4"} />
      </div>
    </main>
  );
};

export default Project3;
