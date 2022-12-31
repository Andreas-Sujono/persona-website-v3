import React, { memo } from 'react';
import { Typewriting } from 'react-typewriting';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import Container from 'components/common/Container';
import Content from 'components/common/Container/Content';
import Text from 'components/common/Text';
import Button from 'components/common/Button';
import Image from 'next/image';
// import resumePDF from 'assets/Andreas_Resume.pdf'
import bgImage from 'assets/home/welcome-bg.svg';
import bgDarkImage from 'assets/home/welcome-bg-dark.svg';
import decoratorImage from 'assets/home/welcome-img.png';
import avatarImage from 'assets/home/avatar.png';
import { Box, FormControlLabel, Switch } from '@mui/material';
import { useTheme } from 'hooks/common';
// import SocialMedia from './SocialMedia'

function WelcomeSection() {
  const theme = useTheme();
  const welcomeBgImage = theme.theme === 'light' ? bgImage : bgDarkImage;

  return (
    <Container
      id="welcome-section"
      sx={{
        position: 'relative',
      }}
    >
      <Content
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '65vh',
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
                fontSize: '4rem',
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
              fontSize: '2rem',
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
          width: '120%',
          maxHeight: '100vh',
          position: 'absolute',
          top: '-5%',
          left: '-15%',
        }}
        alt=""
      />
      <Image
        src={decoratorImage}
        style={{
          width: '380px',
          maxHeight: '460px',
          position: 'absolute',
          bottom: '-14%',
          right: '2%',
        }}
        alt=""
      />
      <Box
        sx={{
          position: 'absolute',
          top: '2%',
          left: '10%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '80%',
        }}
      >
        <Image
          src={avatarImage}
          style={{
            width: '100px',
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
  );
}

export default memo(WelcomeSection);
