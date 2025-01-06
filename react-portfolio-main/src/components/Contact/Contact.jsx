import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/gmailll.png")} alt="Email icon" />
          <a href="mailto:neekita700@gmail.com">neekita700@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/link.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/neekitas/">linkedin.com/neekitaS</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="Github icon" />
          <a href="https://github.com/NeekitaS">github.com/neekitaS</a>
        </li>
      </ul>

      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      
      <div className= {styles.avtar}>
         <img src={getImageUrl("contact/avtar.png")}
            alt="me" />
      </div>
    </footer>
  );
};
