import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Dropdown.scss';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface DropdownConfig {
  items: Array<{ id: number; title: string }>;
  handleSelect: (id: number) => void;
  handleClose: () => void;
}

function Dropdown(props: DropdownConfig) {
  return (
    <div className="dropdown">
      <ul>
        {props.items.map((item) => (
          <li key={item.id} className="dropdown-item" onClick={() => props.handleSelect(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>

      <button onClick={() => props.handleClose()} className="dropdown-close-btn">
        <FontAwesomeIcon icon={faClose} />
      </button>
    </div>
  );
}

export default Dropdown;
