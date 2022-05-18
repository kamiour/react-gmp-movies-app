import { PropsWithChildren } from 'react';
import './Main.scss';

function Main(props: PropsWithChildren<{}>) {
  return <div className="main">{props.children}</div>;
}

export default Main;
