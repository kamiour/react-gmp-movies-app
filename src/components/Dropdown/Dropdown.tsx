import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Dropdown.scss';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface DropdownConfig {
  items: Array<{ id: number; title: string }>;
  handleSelect: (id: number) => void;
  handleClose: () => void;
}

function Dropdown({ items, handleSelect, handleClose }: DropdownConfig) {
  return (
    <div className="dropdown" role="dropdown">
      <ul>
        {items.map((item) => (
          <li key={item.id} className="dropdown-item" onClick={() => handleSelect(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>

      <button onClick={handleClose} className="dropdown-close-btn">
        <FontAwesomeIcon icon={faClose} />
      </button>
    </div>
  );
}

export default Dropdown;
