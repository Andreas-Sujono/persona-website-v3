import {
  FormControl,
  Input,
  InputAdornment,
  TextFieldProps,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextInput from './TextInput';
import { useTheme } from 'hooks/common';

export default function SearchBar(props: TextFieldProps) {
  const theme = useTheme();

  return (
    // <FormControl variant="standard">
    <TextInput
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon
              sx={{
                color: theme.text.primary,
              }}
            />
          </InputAdornment>
        ),
      }}
      {...props}
    />
    // </FormControl>
  );
}
