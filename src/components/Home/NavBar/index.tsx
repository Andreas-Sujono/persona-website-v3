import React, { memo, useRef, useState, useEffect } from 'react';
import Text from 'components/common/Text';
import Image from 'next/image';
import avatarImage from 'assets/home/avatar.webp';
import { Box, Divider, FormControlLabel, Grid, Switch } from '@mui/material';
import { useTheme } from 'hooks/common';
import useWindowDimensions from 'hooks/common/useDimension';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { Link as SamePageLink } from 'react-scroll';

/**
 * same path --> many id link, or onlyPath
 * diff path --> onlyPath
 */
const navbarItems = [
  {
    label: 'Home',
    path: '/#welcome-section',
    id: 'welcome-section',
    route: '/',
  },
  {
    label: 'Projects',
    path: '/#Projects',
    id: 'projects',
    route: '/',
  },
  {
    label: 'Support Me',
    path: '/#support-me',
    id: 'support-me',
    route: '/',
  },
  {
    label: 'Blogs',
    path: '/blogs',
    id: '#',
    route: '/blogs',
    onlyPath: true,
  },
  {
    label: 'Contact Me',
    path: '/#footer',
    id: 'footer',
    route: '/',
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
  const { push, pathname } = useRouter();

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
      {navbarItems.map((item, idx) => {
        const samePath =
          (pathname === '/' && item.route === '/') ||
          pathname.match(item.route.replace('/', '') || 'notExistRoute');
        // console.log('samePath: ', item.route, samePath);
        return (
          <Grid
            item
            key={item.label}
            sx={{
              '.nav-active *': {
                color: theme.text.highlight,
              },
              mb: '1.5rem',
            }}
            onClick={() => push(item.path)}
          >
            {samePath && (
              <SamePageLink
                activeClass="nav-active"
                to={item.id}
                spy
                smooth
                offset={-40}
                duration={500}
              >
                <Text
                  sx={{
                    fontSize: '0.9rem',
                    fontFamily: 'Rock Salt',
                    color: item.onlyPath
                      ? theme.text.highlight
                      : theme.text.primary,
                    cursor: 'pointer',
                  }}
                >
                  {item.label}
                </Text>
              </SamePageLink>
            )}
            {!samePath && (
              <>
                <Text
                  sx={{
                    fontSize: '0.9rem',
                    fontFamily: 'Rock Salt',
                    color: theme.text.primary,
                    cursor: 'pointer',
                  }}
                >
                  {item.label}
                </Text>
              </>
            )}
          </Grid>
        );
      })}

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
  const { push, pathname } = useRouter();

  useEffect(() => {
    if (containerRef.current) setOffsetTop(containerRef.current.offsetTop || 0);
  }, [containerRef.current]);

  useEffect(() => {
    const fn = () => {
      if (window.scrollY < offsetTop - 100) {
        setIsNavOpen(false);
        setIsSticky(true);
      } else if (window.scrollY > offsetTop - 100) {
        setIsSticky(false);
      }
    };
    fn();
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, [offsetTop]);
  // console.log('isNavOpen: ', isNavOpen);

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
          navbarItems.map((item, idx) => {
            const samePath =
              (pathname === '/' && item.route === '/') ||
              pathname.match(item.route.replace('/', '') || 'notExistRoute');
            // console.log('samePath: ', item.route, samePath);
            return (
              <Grid
                item
                key={item.label}
                sx={{
                  '.nav-active *': {
                    color: theme.text.highlight,
                  },
                }}
                onClick={() => push(item.path)}
              >
                {samePath && (
                  <SamePageLink
                    activeClass="nav-active"
                    to={item.id}
                    spy
                    smooth
                    offset={-40}
                    duration={500}
                  >
                    <Text
                      sx={{
                        fontSize: '0.9rem',
                        fontFamily: 'Rock Salt',
                        color: item.onlyPath
                          ? theme.text.highlight
                          : theme.text.primary,
                        cursor: 'pointer',
                      }}
                    >
                      {item.label}
                    </Text>
                  </SamePageLink>
                )}
                {!samePath && (
                  <>
                    <Text
                      sx={{
                        fontSize: '0.9rem',
                        fontFamily: 'Rock Salt',
                        color: theme.text.primary,
                        cursor: 'pointer',
                      }}
                    >
                      {item.label}
                    </Text>
                  </>
                )}
              </Grid>
            );
          })}
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
          {isMobile && !isSticky && (
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
