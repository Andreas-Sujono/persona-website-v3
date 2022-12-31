import MuiButton, { ButtonProps } from '@mui/material/Button';
import { useTheme } from 'hooks/common';

export interface Props extends ButtonProps {
  children: JSX.Element | string | string[];
}

const Button = ({ children, variant, color, ...props }: Props) => {
  const theme = useTheme();
  return (
    <MuiButton
      style={{
        // background: color || theme.text.highlight,
        borderRadius: '1rem',
        padding: '6px 24px',
        minWidth: '160px',
      }}
      variant={variant || 'contained'}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
