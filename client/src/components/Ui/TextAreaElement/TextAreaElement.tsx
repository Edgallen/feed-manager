import React, { ChangeEvent, FC } from "react";

import styles from "./TextAreaElement.scss";

interface IProps {
  value: string;
  inputKey: string;
  onChangeCallback: (value: string, inputKey: string) => void;
  name?: string;
  id?: string;
}

const TextAreaElement: FC<IProps> = ({
  value,
  inputKey,
  onChangeCallback,
  name,
  id,
}) => {
  return (
    <textarea
      className={styles.textAreaElement}
      value={value}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
        onChangeCallback(event.target.value, inputKey)
      }
      name={name}
      id={id}
      cols={30}
      rows={6}
    ></textarea>
  );
};

export default TextAreaElement;
