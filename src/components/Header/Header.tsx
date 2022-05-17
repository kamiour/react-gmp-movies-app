import './Header.scss';

function Header(props: any) {
  return <header className="header">{props.children}</header>;
}

export default Header;
