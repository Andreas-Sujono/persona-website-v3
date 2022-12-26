import { Box, BoxProps } from '@mui/material'

interface Props extends BoxProps {
  children: JSX.Element
}

const Container = ({ children, ...props }: Props) => {
  return <Box {...props}>{children}</Box>
}

export default Container
