import React, { memo } from 'react';
import Text from 'components/common/Text';
import Image from 'next/image';
import bgImage from 'assets/home/side-project-bg.webp';
import { Box, Grid } from '@mui/material';
import Carousel3d from 'components/common/Carousel3d';
import data from './data';
import { useTheme } from 'hooks/common';
import Content from 'components/common/Container/Content';
import useWindowDimensions from 'hooks/common/useDimension';

function ProjectCertificates() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const isMobile = width < 1000;

  const slides = React.useMemo(
    () =>
      data.map((item) => (
        <Image
          src={item}
          alt=""
          key={Math.random()}
          className="certificate-image"
          width={isMobile ? 300 : 500}
          height={isMobile ? 180 : 360}
          style={{
            objectFit: 'cover',
            height: 'auto',
            maxHeight: isMobile ? 180 : 360,
          }}
        />
      )),
    [isMobile]
  );

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: {
          md: '480px',
          xs: '380px',
        },
        overflow: 'hidden',
      }}
    >
      <Image
        src={bgImage}
        alt="background"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '480px',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <Content>
        <Box>
          <Text
            sx={{
              fontSize: '2rem',
              color: 'white',
              fontFamily: 'Rock Salt',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 5,
              top: {
                md: '180px',
                xs: '24px',
              },
              width: 'max-content',
            }}
          >
            Certification
          </Text>
          <Box
            sx={{
              position: 'relative',
              width: '90%',
              left: {
                md: '150px',
                xs: '16px',
              },
              top: {
                md: '0',
                xs: '60px',
              },
              '& img': {
                transition: 'all 0.2s ease-in-out',
              },
              '& img:hover': {
                transform: 'scale(1.12, 1.12)',
                zIndex: 10,
              },
            }}
          >
            <Carousel3d slides={slides} autoplay interval={3000} arrows />
          </Box>
        </Box>
      </Content>
    </Box>
  );
}

export default memo(ProjectCertificates);
