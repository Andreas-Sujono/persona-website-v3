import { ButtonProps, Button as MuiButton } from '@mui/material';
import { useTheme } from 'hooks/common';

interface Props extends ButtonProps {
  children: JSX.Element | string | string[];
}

const Button = ({ children, variant, color, ...props }: Props) => {
  const theme = useTheme();
  return (
    <MuiButton
      style={{
        // background: color || theme.text.highlight,
        borderRadius: '8px',
        padding: '8px 24px',
      }}
      variant={variant || 'contained'}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
