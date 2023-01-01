import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useTheme } from 'hooks/common';

export default function TextInput({ ...props }: TextFieldProps) {
  const theme = useTheme();
  return (
    <TextField
      InputProps={{
        sx: {
          borderRadius: '1rem',
          padding: 0,
          '& label.Mui-focused': {
            color: (props?.sx as any)?.color || theme.text.primary,
          },
          '& fieldset': {
            border: 0,
          },
        },
        inputProps: {
          style: {
            padding: '12px 16px',
            color: (props?.sx as any)?.color || theme.text.primary,
            border: `1px solid ${
              (props?.sx as any)?.color || theme.text.secondary
            }`,
            borderRadius: '1rem',
          },
        },
      }}
      {...props}
    />
  );
}
