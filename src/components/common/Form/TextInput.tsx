import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useTheme } from 'hooks/common';

export default function TextInput(props: TextFieldProps) {
  const theme = useTheme();
  return (
    <TextField
      {...props}
      InputProps={{
        sx: {
          borderRadius: '1rem',
          padding: 0,
          '& label.Mui-focused': {
            color: theme.text.primary,
          },
          '& fieldset': {
            border: 0,
          },
        },
        inputProps: {
          style: {
            padding: '12px 16px',
            color: theme.text.primary,
            border: `1px solid ${theme.text.secondary}`,
            borderRadius: '1rem',
          },
        },
      }}
    />
  );
}
