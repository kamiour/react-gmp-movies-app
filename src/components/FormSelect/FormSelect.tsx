import Select from 'react-select';
import { useField, FieldHookConfig } from 'formik';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import { formSelectStyles } from './formSelectStyles';
import { SelectValue } from '../../models/SelectValue';
import labelStyles from '../../scss/components/form-label.module.scss';
import errorStyles from '../../scss/components/form-error.module.scss';

function FormSelect({ label, ...props }: StateManagerProps & { label?: string }) {
  const [fieldProps, fieldMeta, fieldHelpers] = useField(props as FieldHookConfig<any>);

  return (
    <div>
      <label className={labelStyles.formLabel} htmlFor={props.inputId}>
        {label}
      </label>

      <Select
        classNamePrefix="form-select"
        styles={formSelectStyles}
        {...props} // to get isMulti
        {...fieldProps} // to get value
        onChange={(values: SelectValue | SelectValue[]) => fieldHelpers.setValue(values)}
        onBlur={() => fieldHelpers.setTouched(true)}
      />
      {fieldMeta.touched && fieldMeta.error ? <div className={errorStyles.formError}>{fieldMeta.error}</div> : null}
    </div>
  );
}

export default FormSelect;
