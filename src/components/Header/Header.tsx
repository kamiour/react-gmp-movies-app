import { PropsWithChildren } from 'react';
import './Header.scss';

function Header(props: PropsWithChildren<{}>) {
  return <header className="header">{props.children}</header>;
}

export default Header;
