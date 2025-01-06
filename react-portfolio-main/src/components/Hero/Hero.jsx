import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title1}>Hi there!! </h1> <br />
        <h1 className={styles.title}>I'm Neekita Sharma</h1>
        <p className={styles.description}>
         Frontend Developer 
        </p>
        <a href="mailto:neekita700@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img 
        src={getImageUrl("hero/hero.webp")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
