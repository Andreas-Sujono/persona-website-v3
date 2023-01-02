import React, { memo, useRef, useState, useEffect } from 'react';
import Text from 'components/common/Text';
import Image from 'next/image';
import avatarImage from 'assets/home/avatar.webp';
import { Box, Divider, FormControlLabel, Grid, Switch } from '@mui/material';
import { useTheme } from 'hooks/common';
import useWindowDimensions from 'hooks/common/useDimension';
import MenuIcon from '@mui/icons-material/Menu';

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

function MobileNav({
  isOpen,
  isSticky,
}: {
  isOpen: boolean;
  isSticky: boolean;
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: isSticky ? 'sticky' : 'fixed',
        top: '80px',
        width: '100%',
        background: theme.bg.primary,
        paddingTop: isOpen ? '0' : 0,
        height: isOpen ? '215px' : 0,
        overflow: 'hidden',
        transition: 'all 0.25s ease-in-out',
        boxSizing: 'border-box',
      }}
    >
      {navbarItems.map((item, idx) => (
        <Box
          key={item.label}
          sx={{
            mb: '1.5rem',
          }}
        >
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
        </Box>
      ))}
      <Divider
        sx={{
          background: '#eeeeee',
          width: '100%',
        }}
      />
    </Box>
  );
}

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const theme = useTheme();
  const containerRef = useRef<any>(null);
  const { width } = useWindowDimensions();
  const isMobile = width < 700;

  useEffect(() => {
    if (containerRef.current) setOffsetTop(containerRef.current.offsetTop || 0);
  }, [containerRef.current]);

  useEffect(() => {
    const fn = () => {
      if (window.scrollY < offsetTop - 500) {
        setIsNavOpen(false);
        setIsSticky(true);
      } else if (window.scrollY > offsetTop) {
        setIsSticky(false);
      }
    };
    fn();
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, [offsetTop]);
  console.log('isNavOpen: ', isNavOpen);

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
      ref={containerRef}
    >
      <Grid
        container
        alignItems="center"
        justifyContent={isMobile ? 'space-between' : 'center'}
        maxWidth="lg"
        sx={{
          margin: 'auto',
          '> *:not(:last-child)': {
            marginRight: '5rem',
          },
          paddingX: '1rem',
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
        {!isMobile &&
          navbarItems.map((item, idx) => (
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
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
          {isMobile && (
            <MenuIcon
              sx={{
                color: theme.text.primary,
              }}
              onClick={() => setIsNavOpen(!isNavOpen)}
            />
          )}
        </Box>
      </Grid>
      {isMobile && <MobileNav isOpen={isNavOpen} isSticky={isSticky} />}
    </Box>
  );
}

export default memo(NavBar);
