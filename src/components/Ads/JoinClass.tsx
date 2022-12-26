import React, { memo } from 'react'
import Container from 'components/common/Container'
import Content from 'components/common/Container/Content'
import Text from 'components/common/Text'
import Button from 'components/common/Button'
import Image from 'next/image'
import { Box } from '@mui/material'
import { useTheme } from 'hooks/common'
import styled from '@emotion/styled'
import bgImage from 'assets/home/join-class.png'

function JoinClass() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '800px',
        background: theme.bg.primary,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '2rem',
        padding: '0.6rem 1rem',
        width: '100%',
        mt: 10,
      }}
    >
      <Box>
        <Text>Join Class to Learn Web Development from the Best Engineer</Text>
        <Text>
          Upskills your skills to learn the most up to date web frontend
          technologies and other software enginering skills
        </Text>
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

export default memo(JoinClass)
