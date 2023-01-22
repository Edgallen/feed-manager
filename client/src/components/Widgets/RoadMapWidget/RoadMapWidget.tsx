import React, { FC, useState } from "react";

import type { IStatus } from "./interfaces";

import styles from "./RoadMapWidget.scss";

interface IProps {
  status: IStatus;
}

const StatusRow: FC<IProps> = ({ status }) => {
  const getStatusColor = () => {
    switch (status.status) {
      case "active": {
        return styles.status__active;
      }
      case "done": {
        return styles.status__done;
      }
      default: {
        return styles.status__new;
      }
    }
  };

  return (
    <div className={styles.statusRow} key={status.id}>
      <div className={styles.statusRow__container}>
        <div className={`${styles.status__pin} ${getStatusColor()}`}></div>
        <p className={styles.statusRow__title}>{status.title}</p>
      </div>

      <h2 className={styles.statusRow__counter}>{status.count}</h2>
    </div>
  );
};

const RoadMapWidget = () => {
  const [statusList] = useState<Array<IStatus>>([
    { id: 1, title: "Запланировано", count: 2, status: "new" },
    { id: 2, title: "В процессе", count: 3, status: "active" },
    { id: 3, title: "Выполнено", count: 1, status: "done" },
  ]);

  return (
    <div className={styles.roadMapWidget}>
      <div className={styles.header}>
        <h2 className={styles.header__title}>Статус</h2>
        <button className={styles.header__link}>Перейти</button>
      </div>

      <div className={styles.roadMapWidget__container}>
        {statusList.map((status) => (
          <StatusRow status={status} key={status.id} />
        ))}
      </div>
    </div>
  );
};

export default RoadMapWidget;
