import React, { memo } from 'react'
import Text from 'components/common/Text'
import Button from 'components/common/Button'
import Image from 'next/image'
import { Box } from '@mui/material'
import { useTheme } from 'hooks/common'
import bgImage from 'assets/home/join-class.png'

function JoinNewsletter() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '900px',
        background: theme.bg.primary,
        // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '1rem',
        padding: '0.5rem 1.5rem',
        margin: 'auto',
        width: '100%',
        mt: 10,
        mb: 5,
        border: `1px solid ${theme.text.highlight}`,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          pb: '1rem',
        }}
      >
        <Text
          color={theme.text.highlight}
          sx={{
            fontSize: '1.5rem',
            fontWeight: '600',
            lineHeight: '1.8rem',
          }}
        >
          Join My NewsLetter
        </Text>
        <Text
          color={theme.text.secondary}
          sx={{
            fontSize: '1rem',
            fontWeight: '400',
            mt: '0.8rem',
          }}
        >
          Read Up to date web frontend technologies and other software
          enginering skills
        </Text>
        <Button
          sx={{
            position: 'absolute',
            bottom: '-42px',
            left: 0,
          }}
        >
          Join Newsletter
        </Button>
      </Box>
      <Box>
        <Image
          src={bgImage}
          alt=""
          style={{
            width: 'auto',
            maxHeight: '160px',
          }}
        />
      </Box>
    </Box>
  )
}

export default memo(JoinNewsletter)
