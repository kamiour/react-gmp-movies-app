import { PropsWithChildren } from 'react';
import './OptionsPanel.scss';

function OptionsPanel(props: PropsWithChildren<{}>) {
  return <div className="options-panel">{props.children}</div>;
}

export default OptionsPanel;
