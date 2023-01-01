import React, { memo } from 'react';
import Text from 'components/common/Text';
import Image from 'next/image';
import bgImage from 'assets/home/side-project-bg.png';
import { Box, Grid } from '@mui/material';
import Carousel3d from 'components/common/Carousel3d';
import data from './data';
import { useTheme } from 'hooks/common';
import Content from 'components/common/Container/Content';

function ProjectCertificates() {
  const theme = useTheme();

  const slides = React.useMemo(
    () =>
      data.map((item) => (
        <Image
          src={item}
          alt=""
          key={Math.random()}
          className="certificate-image"
          width={500}
          height={360}
          style={{
            objectFit: 'cover',
          }}
        />
      )),
    []
  );

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '480px',
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
              top: '180px',
              width: 'max-content',
            }}
          >
            Certification
          </Text>
          <Box
            sx={{
              position: 'relative',
              left: '150px',
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
