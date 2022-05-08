import React from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Projet from "../components/Projet";

const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Logo />
        <Navigation />
        <Projet projectNumber={3} />
        <Button left={"/projet3"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Project4;
