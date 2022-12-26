import { Box, BoxProps } from '@mui/material'

interface Props extends BoxProps {
  children: any
}

const Content = ({ children, ...props }: Props) => {
  return (
    <Box maxWidth="lg" style={{ margin: 'auto', padding: '1rem' }} {...props}>
      {children}
    </Box>
  )
}

export default Content
