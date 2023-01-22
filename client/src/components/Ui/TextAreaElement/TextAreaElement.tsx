import React, { ChangeEvent, FC } from "react";
import styles from "./TextAreaElement.module.scss";

interface textAreaElementProps {
  value: string;
  inputKey: string;
  onChangeCallback: (value: string, inputKey: string) => void;
  name?: string;
  id?: string;
}

const TextAreaElement: FC<textAreaElementProps> = ({
  value,
  inputKey,
  onChangeCallback,
  ...props
}) => {
  return (
    <textarea
      className={styles.textAreaElement}
      value={value}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
        onChangeCallback(event.target.value, inputKey)
      }
      name={props.name}
      id={props.id}
      cols={30}
      rows={6}
    ></textarea>
  );
};

export default TextAreaElement;
