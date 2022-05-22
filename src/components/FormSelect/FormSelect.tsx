import Select from 'react-select';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import { formSelectStyles } from './formSelectStyles';

function FormSelect(props: StateManagerProps) {
  return <Select classNamePrefix="form-select" styles={formSelectStyles} {...props} />;
}

export default FormSelect;
