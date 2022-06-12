import Select from 'react-select';
import { sortSelectStyles } from './sortSelectStyles';
import { SelectValue } from '../../models/SelectValue';
import styles from './SortPanel.module.scss';

interface SortPanelProps {
  sortOptions: SelectValue[];
  sortByValue: SelectValue | null;
  handleSelect: (value: SelectValue) => void;
}

const customStyles = sortSelectStyles;

export default function SortPanel({ sortOptions, sortByValue, handleSelect }: SortPanelProps) {
  const selectId = 'sort-select';

  return (
    <div className={styles.sortPanel}>
      <span className={styles.sortPanelLabel}>Sort by</span>
      <Select
        value={sortByValue}
        options={sortOptions}
        styles={customStyles}
        onChange={(value) => handleSelect(value as SelectValue)}
        instanceId={selectId}
      />
    </div>
  );
}
