import { Typography, TypographyProps } from '@mui/material'
import { TypographyVariant } from '@mui/material/styles'
import { useTheme } from 'hooks/common'

interface Props extends TypographyProps {
  children: JSX.Element | string
  variant?: TypographyVariant
  color?: string
}

const Text = ({ children, variant, color, ...props }: Props) => {
  const theme = useTheme()
  return (
    <Typography
      variant={variant || 'body1'}
      color={color || theme.text.primary}
      {...props}
    >
      {children}
    </Typography>
  )
}

export default Text
