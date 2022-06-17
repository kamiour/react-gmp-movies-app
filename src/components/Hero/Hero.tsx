import { PropsWithChildren } from 'react';
// import './Hero.scss';

function Hero({ children }: PropsWithChildren<{}>) {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">{children}</div>
    </div>
  );
}

export default Hero;
