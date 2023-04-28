import cn from "classnames";
import styles from "./index.module.css";

export default function Button({ apperance, children, className, ...props }) {
  return (
    <button
      className={cn(
        styles.base,
        className,
        apperance === "primary" ? styles.primary : undefined,
        apperance === "line" ? styles.line : undefined,
        apperance === "default" ? styles.default : undefined,
        apperance === "language" ? styles.language : undefined
      )}
      {...props}
    >
      {children}
    </button>
  );
}
