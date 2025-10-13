import styles from "./HireSection.module.css";
import dedicatedteams from "../../public/assets/img/dedicatedteams.svg";
import management from "../../public/assets/img/management.svg";
import outsourcing from "../../public/assets/img/outsourcing.svg";
import shield from "../../public/assets/img/shield.svg";

function HireSection() {
  return (
    <div className={styles.hire_container}>
      <div className={styles.text_container}>
        <h4>Expertise</h4>
        <h3>
          Hire Permanent and Remote <br /> Developers
        </h3>
        <p>
          From full-time remote engineering teams to hourly <br /> contractors,
          work with remote devs as needed
        </p>
      </div>
      <div className={styles.log_container}>
        <div className={styles.box}>
          <img src={dedicatedteams} alt="asd" />
          <h5>Dedicated Teams</h5>
          <p>Find your next team member</p>
        </div>
        <div className={styles.box}>
          <img src={management} alt="staff augmentation" />
          <h5>Staff Augmentation</h5>
          <p>Build a distributed development team</p>
        </div>
        <div className={styles.box}>
          <img src={outsourcing} alt="Software Outsourcing" />
          <h5>Software Outsourcing</h5>
          <p>End-to-End Software Development Outsourcing Solutions</p>
        </div>
        <div className={styles.box}>
          <img src={shield} alt="Remote office" />
          <h5>Remote Office</h5>
          <p>Open your own remote development center and grow your business</p>
        </div>
      </div>
    </div>
  );
}

export default HireSection;
