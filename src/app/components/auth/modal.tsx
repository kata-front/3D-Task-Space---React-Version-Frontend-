import type { FC, ReactNode } from "react";
import styles from "../../styles/auth.module.scss";

const ModalComponent: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.modal}>
    {children}
  </div>;
};

export default ModalComponent;
