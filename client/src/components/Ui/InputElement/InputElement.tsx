import React, { ChangeEvent, FC } from "react";

import styles from "./InputElement.scss";

interface IProps {
  value: string;
  type: "text" | "password";
  inputKey: string;
  onChangeCallback: (value: string, inputKey: string) => void;
  minlength?: number;
  isRequired?: boolean;
  name?: string;
  id?: string;
}

const InputElement: FC<IProps> = ({
  value,
  type,
  inputKey,
  onChangeCallback,
  minlength,
  isRequired,
  name,
  id,
}) => {
  return (
    <input
      className={styles.inputElement}
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        onChangeCallback(event.target.value, inputKey)
      }
      type={type}
      minLength={minlength}
      required={isRequired}
      name={name}
      id={id}
    />
  );
};

export default InputElement;
