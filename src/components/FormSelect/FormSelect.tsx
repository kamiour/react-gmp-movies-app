import Select from 'react-select';
import { useField, FieldHookConfig } from 'formik';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import { formSelectStyles } from './formSelectStyles';
import { SelectValue } from '../../models/SelectValue';

function FormSelect({ label, ...props }: StateManagerProps & { label?: string }) {
  const [fieldProps, , fieldHelpers] = useField(props as FieldHookConfig<any>);

  return (
    <div className="form-field">
      <label className="form-label" htmlFor={props.inputId}>
        {label}
      </label>

      <Select
        classNamePrefix="form-select"
        styles={formSelectStyles}
        {...props} // to get isMulti
        {...fieldProps} // to get value
        onChange={(values: SelectValue | SelectValue[]) => fieldHelpers.setValue(values)}
      />
    </div>
  );
}

export default FormSelect;
