import { FormInputLabel, Input, Group } from './FormInput.styles';

const FormInput = ({ label, ...otherProps }) => {

 // console.log(otherProps.value.length,'VALUEEEE')

  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;