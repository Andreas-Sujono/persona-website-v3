import React, { memo } from 'react';
import Text from 'components/common/Text';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';
import Content from 'components/common/Container/Content';
import mainProjectImage from 'assets/home/main-project1.webp';
import mainProject2Image from 'assets/home/main-project2.webp';
import mainProject3Image from 'assets/home/main-project3.webp';
import { useTheme } from 'hooks/common';
import useWindowDimensions from 'hooks/common/useDimension';
import Fade from 'react-reveal/Fade';

function ImageCard({ style, image }: { style: any; image: any }) {
  return (
    <Box
      sx={{
        '& img': {
          transition: 'all 0.2s ease-in-out',
        },
        '& img:hover': {
          transform: 'scale(1.08, 1.08)',
          zIndex: 10,
        },
      }}
    >
      <Image src={image} alt="mainProject" style={style} />
    </Box>
  );
}

function MainProjects() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const isMobile = width < 900;

  return (
    <Box
      id="projects"
      sx={{
        padding: {
          md: '4rem',
          xs: '2rem',
        },
        paddingY: {
          md: '4rem',
          xs: '3rem',
        },
        paddingBottom: {
          md: '4rem',
          xs: '4rem',
        },
        background: theme.bg.secondary,
        overflow: 'hidden',
      }}
    >
      <Fade>
        <Content>
          <Box
            sx={{
              overflow: 'hidden',
            }}
          >
            <Text
              sx={{
                zIndex: 2,
                fontSize: '2rem',
                color: theme.text.highlight,
                fontFamily: 'Rock Salt',
                whiteSpace: 'nowrap',
              }}
            >
              Main Projects
            </Text>
            <Box
              sx={{
                width: '100%',
                mt: '4rem',
                position: 'relative',
                minHeight: {
                  md: '62vh',
                  xs: '300px',
                },
              }}
            >
              <ImageCard
                image={mainProjectImage}
                style={{
                  width: 'auto',
                  maxWidth: isMobile ? '60vw' : '40vw',
                  height: 'auto',
                  objectFit: 'contain',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
              <ImageCard
                image={mainProject2Image}
                style={{
                  width: 'auto',
                  maxWidth: isMobile ? '50vw' : '36vw',
                  height: 'auto',
                  objectFit: 'contain',
                  position: 'absolute',
                  top: '20%',
                  left: isMobile ? '40%' : '50%',
                }}
              />
              <ImageCard
                image={mainProject3Image}
                style={{
                  width: 'auto',
                  maxWidth: isMobile ? '60vw' : '30vw',
                  height: 'auto',
                  objectFit: 'contain',
                  position: 'absolute',
                  top: '50%',
                  left: '10%',
                }}
              />
            </Box>
          </Box>
        </Content>
      </Fade>
    </Box>
  );
}

export default memo(MainProjects);
