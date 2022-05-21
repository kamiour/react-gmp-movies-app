import Select from 'react-select';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import { formSelectStyles } from './formSelectStyles';

function FormSelect(props: StateManagerProps) {
  return <Select styles={formSelectStyles} {...props} />;
}

export default FormSelect;
