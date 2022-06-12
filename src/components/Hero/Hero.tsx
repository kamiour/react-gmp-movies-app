import { PropsWithChildren } from 'react';
import styles from './Hero.module.scss';

function Hero({ children }: PropsWithChildren<{}>) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>{children}</div>
    </div>
  );
}

export default Hero;
