import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import styles from './Dropdown.module.scss';

interface DropdownConfig {
  items: Array<{ id: number; title: string }>;
  handleSelect: (id: number) => void;
  handleClose: () => void;
}

function Dropdown({ items, handleSelect, handleClose }: DropdownConfig) {
  return (
    <div className={styles.dropdown} role="menu">
      <ul>
        {items.map((item) => (
          <li key={item.id} className={styles.dropdownItem} onClick={() => handleSelect(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>

      <button onClick={handleClose} className={styles.dropdownCloseBtn}>
        <FontAwesomeIcon icon={faClose} />
      </button>
    </div>
  );
}

export default Dropdown;
