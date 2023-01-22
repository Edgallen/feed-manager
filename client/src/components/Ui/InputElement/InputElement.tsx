import React, { ChangeEvent, FC } from "react";
import styles from "./InputElement.module.scss";

interface inputElementProps {
  value: string;
  type: "text" | "password";
  inputKey: string;
  onChangeCallback: (value: string, inputKey: string) => void;
  minlength?: number;
  required?: boolean;
  name?: string;
  id?: string;
}

const InputElement: FC<inputElementProps> = ({
  value,
  type,
  inputKey,
  onChangeCallback,
  ...props
}) => {
  return (
    <input
      className={styles.inputElement}
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        onChangeCallback(event.target.value, inputKey)
      }
      type={type}
      minLength={props.minlength}
      required={props.required}
      name={props.name}
      id={props.id}
    />
  );
};

export default InputElement;
