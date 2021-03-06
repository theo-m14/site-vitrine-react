import React from "react";
import Button from "../components/Button";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        initial="out"
        exit="out"
        animate="in"
        variants={pageTransition}
        transition={{ duration: 0.3 }}
      >
        <Navigation />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>15 Rue Koulou</p>
              <p>25018 Null</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="07965897826">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("téléphone copié");
                  }}
                >
                  07965897826
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="test@contanct.fr" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("téléphone copié");
                  }}
                >
                  test@contanct.fr
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Cours de From Scratch Site Vitrine</p>
          </div>
        </div>
        <Button left={"/projet4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
