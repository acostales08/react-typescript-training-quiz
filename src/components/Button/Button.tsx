import * as React from 'react';
import Button from '@mui/material/Button';

type Props = {
    text: string,
    variant: 'text' | 'outlined' | 'contained',
    onClick: () => void
}

const BasicButtons: React.FC<Props> = ({onClick, variant, text, ...rest}) => {
  return (
        <Button
            {...rest}
            variant={variant}
            onClick={onClick}
        >
            {text}
        </Button>

  );
}

export default BasicButtons