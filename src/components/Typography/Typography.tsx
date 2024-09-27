import classNames from "classnames";
import { TypographyColor, TypographyProps, TypographyTag } from "./types";
import styles from "./Typography.module.css";

const Typography = ({
  tag = TypographyTag.span,
  variant,
  className,
  children,
  color = TypographyColor.Primary,
}: TypographyProps) => {
  const Component = tag as keyof JSX.IntrinsicElements;

  const classes = classNames(styles[variant], styles[color], className);

  return <Component className={classes}>{children}</Component>;
};

export { Typography };
