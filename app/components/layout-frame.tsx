import type { ReactNode } from "react";
import styles from "./layout-frame.module.css";

type LayoutFrameProps = {
  children: ReactNode;
  className?: string;
  mode?: "page" | "section";
};

/**
 * A quiet animation-layout guide for a page or a content section.
 * It is decorative only; content remains fully interactive beneath it.
 */
export function LayoutFrame({ children, className = "", mode = "section" }: LayoutFrameProps) {
  return (
    <div className={`${styles.frame} ${styles[mode]} ${className}`.trim()}>
      <div className={styles.visualLayer} aria-hidden="true">
        <span className={`${styles.tick} ${styles.tickTop}`} />
        <span className={`${styles.tick} ${styles.tickRight}`} />
        <span className={`${styles.tick} ${styles.tickBottom}`} />
        <span className={`${styles.tick} ${styles.tickLeft}`} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
