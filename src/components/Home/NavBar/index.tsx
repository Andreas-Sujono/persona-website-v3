import React, { memo } from 'react';
import Text from 'components/common/Text';
import Image from 'next/image';
import avatarImage from 'assets/home/avatar.png';
import { Box, Grid } from '@mui/material';
import { useTheme } from 'hooks/common';

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
];

function NavBar() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: 'white',
        position: 'sticky',
        top: 0,
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        maxWidth="lg"
        sx={{
          margin: 'auto',
          marginTop: '3rem',
          '> *:not(:last-child)': {
            marginRight: '5rem',
          },
        }}
      >
        <Grid item>
          <Image
            src={avatarImage}
            alt="Andreas"
            style={{
              width: '56px',
              height: '48px',
              borderRadius: '50%',
            }}
          />
        </Grid>
        {navbarItems.map((item, idx) => (
          <Grid item key={item.label} sx={{}}>
            <Text
              sx={{
                fontSize: '1rem',
                fontFamily: 'Rock Salt',
                color: idx !== 0 ? theme.text.primary : theme.text.highlight,
                cursor: 'pointer',
              }}
            >
              {item.label}
            </Text>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default memo(NavBar);
