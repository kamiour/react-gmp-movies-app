import './SortPanel.scss';

import Select, { SingleValue } from 'react-select';
import { useState } from 'react';
import { sortSelectStyles } from './sortSelectStyles';

interface SelectValue {
  value: string;
  label: string;
}

const options: SelectValue[] = [
  { value: 'release_date', label: 'Release Date' },
  { value: 'vote_average', label: 'Rating' },
  { value: 'runtime', label: 'Duration' },
];

const customStyles = sortSelectStyles;

export default function SortPanel() {
  const [selectedSort, setSelectedSort] = useState<SelectValue | null>(options[0]);

  function onChange(selectedValue: SingleValue<SelectValue>) {
    setSelectedSort(selectedValue);

    // handle sort value change
    console.log(selectedValue);
  }

  return (
    <div className="sort-panel">
      <span className="sort-panel-label">Sort by</span>
      <Select value={selectedSort} options={options} styles={customStyles} onChange={onChange} />
    </div>
  );
}
