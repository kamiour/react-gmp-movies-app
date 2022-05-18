import { PropsWithChildren } from 'react';
import './Hero.scss';

function Hero(props: PropsWithChildren<{}>) {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">{props.children}</div>
    </div>
  );
}

export default Hero;
