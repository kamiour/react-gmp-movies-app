import './OptionsPanel.scss';

function OptionsPanel(props: any) {
  return (
    <div className="options-panel">
      {props.children}
    </div>
  );
}

export default OptionsPanel;
