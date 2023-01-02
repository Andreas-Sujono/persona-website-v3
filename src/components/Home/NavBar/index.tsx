import React, { memo } from 'react';
import Text from 'components/common/Text';
import Image from 'next/image';
import avatarImage from 'assets/home/avatar.webp';
import { Box, FormControlLabel, Grid, Switch } from '@mui/material';
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
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: theme.bg.primary,
        padding: '1rem 0 1rem 0',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        maxWidth="lg"
        sx={{
          margin: 'auto',
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
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </Grid>
        {navbarItems.map((item, idx) => (
          <Grid item key={item.label} sx={{}}>
            <Text
              sx={{
                fontSize: '0.9rem',
                fontFamily: 'Rock Salt',
                color: idx !== 0 ? theme.text.primary : theme.text.highlight,
                cursor: 'pointer',
              }}
            >
              {item.label}
            </Text>
          </Grid>
        ))}
        <FormControlLabel
          control={
            <Switch
              checked={theme.theme === 'dark'}
              onChange={theme.switchTheme}
            />
          }
          label="Dark"
          sx={{
            color: theme.text.secondary,
          }}
          onChange={theme.switchTheme}
        />
      </Grid>
    </Box>
  );
}

export default memo(NavBar);
