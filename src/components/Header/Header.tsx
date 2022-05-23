import { PropsWithChildren } from 'react';
import './Header.scss';

const Header = ({ children }: PropsWithChildren<{}>) => <header className="header">{children}</header>;

export default Header;
