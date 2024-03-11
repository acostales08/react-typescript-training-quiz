import * as React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

type Props ={
    onChange?: |React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined
}& TextFieldProps

const  BasicTextFields: React.FC<Props> = ({onChange, ...rest}) => {
  return (
      <TextField 
        {...rest}
        onChange={onChange}
      />
  );
}

export default BasicTextFields 