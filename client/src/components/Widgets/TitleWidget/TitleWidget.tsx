import React from "react";

import styles from "./TitleWidget.scss";

const TitleWidget = () => (
    <div className={styles.titleWidget}>
      <div className={styles.title__container}>
        <h1 className={styles.title__main}>Feedback board</h1>
        <span className={styles.title__secondary}>Название проекта</span>
      </div>
    </div>
);

export default TitleWidget;
