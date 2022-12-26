import React, { memo } from 'react'
import Text from 'components/common/Text'
import Image from 'next/image'
import avatarImage from 'assets/home/avatar.png'
import { Box, Grid } from '@mui/material'

const navbarItems = [
  {
    label: 'Home',
    path: '/#welcome-section',
  },
  {
    label: 'Projects',
    path: '/#Projects',
  },
  {
    label: 'Support Me',
    path: '/#support-me',
  },
  {
    label: 'Blogs',
    path: '/blogs',
  },
  {
    label: 'Contact Me',
    path: '/contact-me',
  },
]

function NavBar() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      maxWidth="lg"
      sx={{
        margin: 'auto',
      }}
    >
      <Grid item>
        <Image
          src={avatarImage}
          alt="Andreas"
          style={{
            width: '24px',
            height: '24px',
          }}
        />
      </Grid>
      {navbarItems.map((item) => (
        <Grid item key={item.label}>
          <Text>{item.label}</Text>
        </Grid>
      ))}
    </Grid>
  )
}

export default memo(NavBar)
