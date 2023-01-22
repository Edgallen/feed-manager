import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BackNavigationButton.module.scss";

interface backNavigationButtonProps {
  navigateTo: string;
}

const BackNavigationButton: FC<backNavigationButtonProps> = ({
  navigateTo,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(navigateTo);
  };

  return (
    <div className={styles.backNavigationButton} onClick={handleButtonClick}>
      <i
        className={`ri-arrow-left-s-line ${styles.backNavigationButton__icon}`}
      ></i>
      Назад
    </div>
  );
};

export default BackNavigationButton;
