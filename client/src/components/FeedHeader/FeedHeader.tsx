import React, { FC, useState } from "react";
import { observer } from "mobx-react-lite";

import MainButton from "../Ui/MainButton/MainButton";

import feedStore from "../../stores/feedStore";
import modalStore from "../../stores/modalStore";

import type { TFilters } from "../../types/feedTypes";

import styles from "./FeedHeader.scss";

interface ISortVariants {
  id: number;
  title: string;
}

interface IProps {
  sortVariants: Array<ISortVariants>;
  activeSort: string;
  callback: (selectedSort: string) => void;
}

const SortMenu: FC<IProps> = ({
  sortVariants,
  activeSort,
  callback,
}) => {
  const [showSelector, setShowSelector] = useState(false);

  const handleShowSelector = () => {
    setShowSelector(!showSelector);
  };

  const handleSortChange = (selectedSort: string) => {
    callback(selectedSort);
    setShowSelector(false);
  };

  return (
    <div className={styles.sortMenu}>
      <div className={styles.sortMenu__container} onClick={handleShowSelector}>
        <p className={styles.sortMenu__subtitle}>Сортировать по:</p>
        <h3 className={styles.sortMenu__title}>{activeSort}</h3>
        <i
          className={`ri-arrow-down-s-line ${styles.sortMenu__icon} ${
            showSelector && styles.sortMenu__icon__reverse
          }`}
        ></i>
      </div>

      {showSelector && (
        <div className={styles.sortSelector__container}>
          {sortVariants.map((variant) => (
            <div
              className={styles.sortSelector__selector}
              key={variant.id}
              onClick={() => handleSortChange(variant.title)}
            >
              <span>{variant.title}</span>
              {activeSort === variant.title && (
                <i className={`ri-check-line ${styles.sortSelector__icon}`}></i>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const FeedHeader = observer(() => {
  const [sortVariants] = useState([
    { id: 1, title: "Больше голосов" },
    { id: 2, title: "Меньше голосов" },
    { id: 3, title: "Больше комментариев" },
    { id: 4, title: "Меньше комментариев" },
  ]);

  const handleSortChange = (selectedSort: TFilters) => {
    feedStore.setNewFilter(selectedSort);
  };

  const handleAddClick = () => {
    modalStore.showModal();
  };

  return (
    <header className={styles.feedHeader}>
      <div className={styles.feedHeader__container}>
        <i className={`ri-lightbulb-flash-fill ${styles.feedHeader__icon}`}></i>
        <h2 className={styles.feedHeader__title}>6 Предложений</h2>
        <SortMenu
          sortVariants={sortVariants}
          activeSort={feedStore.activeFilter}
          callback={handleSortChange}
        />
      </div>

      <MainButton text={"Добавить"} clickCallback={handleAddClick} />
    </header>
  );
});

export default FeedHeader;
