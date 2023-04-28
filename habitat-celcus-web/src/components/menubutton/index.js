import cn from "classnames";
import styles from "./index.module.css";
import Link from "next/link";
import TranslateLink from "../translateLink";

export default function MenuButton({
  apperance,
  children,
  className,
  ...props
}) {
  return (
    <TranslateLink
      className={cn(
        styles.base,
        className,
        apperance === "basic" ? styles.basic : undefined,
        apperance === "light" ? styles.light : undefined
      )}
      {...props}
    >
      {children}
    </TranslateLink>
  );
}
