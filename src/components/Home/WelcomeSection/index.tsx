import React, { memo } from 'react';
import { Typewriting } from 'react-typewriting';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import Container from 'components/common/Container';
import Content from 'components/common/Container/Content';
import Text from 'components/common/Text';
import Image from 'next/image';
// import resumePDF from 'assets/Andreas_Resume.pdf'
import bgImage from 'assets/home/welcome-bg.svg';
import bgDarkImage from 'assets/home/welcome-bg-dark.svg';
import decoratorImage from 'assets/home/welcome-img.webp';
import avatarImage from 'assets/home/avatar.webp';
import { Box, FormControlLabel, Switch } from '@mui/material';
import { useTheme } from 'hooks/common';
import useWindowDimensions from 'hooks/common/useDimension';
// import SocialMedia from './SocialMedia'

function WelcomeSection() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const isMobile = width < 900;
  const welcomeBgImage = theme.theme === 'light' ? bgImage : bgDarkImage;

  return (
    <>
      <Container
        id="welcome-section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Content
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: {
              xs: '50vh',
              md: '65vh',
            },
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Container
            className="title-container"
            sx={{
              mt: 5,
            }}
          >
            <LightSpeed>
              <Text
                variant="h1"
                sx={{
                  fontSize: {
                    md: '4rem',
                    xs: '3rem',
                  },
                  color: 'white',
                  fontFamily: 'Rock Salt',
                }}
              >
                Andreas Sujono
              </Text>
            </LightSpeed>
            <Text
              variant="h2"
              sx={{
                fontSize: {
                  md: '2rem',
                  xs: '1.5rem',
                },
                color: 'white',
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                mt: 3,
                fontWeight: '500',
                opacity: 0.5,
              }}
            >
              I&apos;m
              <Typewriting
                strings={[
                  ' a Front End Engineer',
                  ' a Full Stack Developer',
                  ' a Blockchain Developer',
                ]}
                waitBeforeDeleteMs={3000}
              >
                {({ currentText, fullCurrentText }) => (
                  <span aria-label={fullCurrentText}>{currentText}</span>
                )}
              </Typewriting>
            </Text>
          </Container>
          {/* <SocialMedia /> */}
          {/* <Fade>
          <Button
            sx={{
              mt: 2,
            }}
            variant="contained"
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </Fade> */}
        </Content>
        <Image
          src={welcomeBgImage}
          style={{
            width: isMobile ? '280%' : '120%',
            height: 'auto',
            maxHeight: '100vh',
            position: 'absolute',
            top: isMobile ? '-5%' : '-5%',
            left: isMobile ? '-35%' : '-15%',
          }}
          priority
          alt=""
        />
        <Box
          sx={{
            position: 'absolute',
            top: '2%',
            left: {
              md: '10%',
              xs: '1.5rem',
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: {
              md: '80%',
              xs: '94%',
            },
            zIndex: 8,
          }}
        >
          <Image
            src={avatarImage}
            style={{
              width: '14%',
              minWidth: '60px',
              maxWidth: '100px',
              height: 'auto',
              maxHeight: '70px',
              objectFit: 'cover',
            }}
            alt=""
          />
          <FormControlLabel
            control={
              <Switch
                checked={theme.theme === 'dark'}
                onChange={theme.switchTheme}
              />
            }
            label="Dark"
            sx={{
              color: 'white',
            }}
            onChange={theme.switchTheme}
          />
        </Box>
      </Container>
      <Image
        src={decoratorImage}
        style={{
          width: '30%',
          height: 'auto',
          minWidth: '120px',
          maxWidth: '380px',
          maxHeight: '460px',
          position: 'absolute',
          bottom: isMobile ? '44%' : '24%',
          right: '2%',
        }}
        priority
        alt=""
      />
    </>
  );
}

export default memo(WelcomeSection);
