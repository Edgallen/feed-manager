import { observer } from "mobx-react-lite";
import React, { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import modalStore from "../../stores/modalStore";
import styles from "./ModalBody.module.scss";

interface ModalBodyProps {
  remixIconClass: "ri-add-line";
  children: ReactNode;
}

const ModalBody: FC<ModalBodyProps> = observer(
  ({ remixIconClass, children }) => {
    const handleModalClose = () => {
      modalStore.hideModal();
    };

    useEffect(() => {
      const handleKeyPressClose = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          handleModalClose();
        }
      };
      document.addEventListener("keydown", handleKeyPressClose);
      return () => {
        document.removeEventListener("keydown", handleKeyPressClose);
      };
    }, []);

    return createPortal(
      <section className={styles.modalBody}>
        <div className={styles.modalBody__container}>
          <div className={styles.children__wrapper}>
            <div className={styles.banner}>
              <i className={`${remixIconClass} ${styles.banner__icon}`}></i>
            </div>
            {children}
          </div>
        </div>

        <div className={styles.modalOverlay} onClick={handleModalClose}></div>
      </section>,
      document.getElementById("modal")
    );
  }
);

export default ModalBody;
