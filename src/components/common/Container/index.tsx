import { Box, BoxProps } from '@mui/material'
import { useTheme } from 'hooks/common'

interface Props extends BoxProps {
  children: JSX.Element | string | string[] | JSX.Element[]
  background?: string
}

const Container = ({ children, background, ...props }: Props) => {
  const theme = useTheme()
  return (
    <Box
      style={{
        background: background,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Container
