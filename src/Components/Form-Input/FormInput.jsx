import { FormInputLabel, Input, Group } from './FormInput.styles';

const FormInput = ({ label, ...otherProps }) => {

  console.log(otherProps)

  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={0}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;