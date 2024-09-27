import classNames from "classnames";
import styles from "./SectionContainer.module.css";
import { ReactElement, ReactNode } from "react";

type props = {
  tag?: "section" | "aside" | "header" | "footer";
  width: "full" | "medium";
  children?: ReactNode;
  wrapperClassName?: string;
  innerClassName?: string;
};

const SectionContainer = ({
  tag = "section",
  width = "full",
  children,
  wrapperClassName,
  innerClassName,
}: props): ReactElement => {
  const Wrapper = tag || "section";

  return (
    <Wrapper
      className={classNames(
        {
          [styles.full]: width === "full",
          [styles.medium]: width === "medium",
        },
        wrapperClassName ?? ""
      )}
    >
      <div
        className={classNames(
          {
            [styles.mediumInner]: width === "medium",
          },
          innerClassName ?? "mx-auto"
        )}
      >
        {children}
      </div>
    </Wrapper>
  );
};

export { SectionContainer };
