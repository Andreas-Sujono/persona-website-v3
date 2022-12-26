import { Typography, TypographyProps } from '@mui/material'
import { TypographyVariant } from '@mui/material/styles'

interface Props extends TypographyProps {
  children: JSX.Element
  variant: TypographyVariant
  color: string
}

const Text = ({ children, variant, color, ...props }: Props) => {
  return (
    <Typography variant={variant || 'body1'} color={color} {...props}>
      {children}
    </Typography>
  )
}

export default Text
