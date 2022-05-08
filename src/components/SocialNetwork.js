import React, { useEffect } from "react";

const SocialNetwork = () => {
  useEffect(() => {
    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((icon) => {
      icon.addEventListener("mouseover", (e) => {
        icon.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });

      icon.addEventListener("mouseleave", () => {
        icon.style.transform = ``;
      });
    });
  }, []);

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="http://www.facebook.com"
          target="_blank"
          rel="nooperner noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
        </a>
        <a
          href="http://www.twitter.fr"
          target="_blank"
          rel="nooperner noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        <a
          href="http://www.instagram.fr"
          target="_blank"
          rel="nooperner noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
