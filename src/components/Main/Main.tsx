import './Main.scss';

function Main(props: any) {
  return (
    <div className="main">
      {props.children}
    </div>
  )
}

export default Main;
