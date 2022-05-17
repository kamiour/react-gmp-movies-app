import SearchForm from '../SearchForm/SearchForm';
import './Hero.scss';

function Hero(props: any) {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">{props.children}</div>
    </div>
  );
}

export default Hero;
