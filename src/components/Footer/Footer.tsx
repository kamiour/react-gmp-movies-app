import { PropsWithChildren } from 'react';
import './Footer.scss';

function Footer(props: PropsWithChildren<{}>) {
  return <footer className="footer">{props.children}</footer>;
}

export default Footer;
