import { PropsWithChildren } from 'react';
import styles from './Main.module.scss';

function Main({ children }: PropsWithChildren<{}>) {
  return <div className={styles.main}>{children}</div>;
}

export default Main;
