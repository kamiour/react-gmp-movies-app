import './SortPanel.scss';
import Select from 'react-select';
import { sortSelectStyles } from './sortSelectStyles';
import { SelectValue } from '../../models/SelectValue';

interface SortPanelProps {
  sortOptions: SelectValue[];
  sortByValue: SelectValue | null;
  handleSelect: (value: SelectValue) => void;
}

const customStyles = sortSelectStyles;

export default function SortPanel({ sortOptions, sortByValue, handleSelect }: SortPanelProps) {
  return (
    <div className="sort-panel">
      <span className="sort-panel-label">Sort by</span>
      <Select value={sortByValue} options={sortOptions} styles={customStyles} onChange={(value) => handleSelect(value as SelectValue)} />
    </div>
  );
}
