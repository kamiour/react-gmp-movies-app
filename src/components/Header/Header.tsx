import { PropsWithChildren } from 'react';
import styles from './Header.module.scss';

const Header = ({ children }: PropsWithChildren<{}>) => <header className={styles.header}>{children}</header>;

export default Header;
