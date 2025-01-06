import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutPhoto.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/student.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Student at KNIT Sultanpur</h3>
              <p>
                I'm a MCA final year student at KNIT. It's a two year course.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have worked on my Frontend skills and now i am practicing my these skills by making small projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/dsaIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>DSA learner</h3>
              <p>
                I have solving DSA problems daily and developing my problem solving skills day by day.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
