import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "normal";
}

const Button = (props: Props) => {
  const { children, className, variant = "contained", ...rest } = props;

  const customClassName: string = classNames(
    { [styles.defauleStyle]: variant === "contained" },
    className
  );

  return (
    <button {...rest} className={customClassName}>
      {children}
    </button>
  );
};

export { Button };
