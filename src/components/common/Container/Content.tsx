import { Box, BoxProps } from '@mui/material';

interface Props extends BoxProps {
  children: any;
}

const Content = ({ children, sx = {}, ...props }: Props) => {
  return (
    <Box
      maxWidth="lg"
      sx={{ margin: 'auto', padding: '1rem', ...sx }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Content;
