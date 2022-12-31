import React, { memo } from 'react';
import Text from 'components/common/Text';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';
import Content from 'components/common/Container/Content';
import mainProjectImage from 'assets/home/main-project1.png';
import mainProject2Image from 'assets/home/main-project2.png';
import mainProject3Image from 'assets/home/main-project3.png';
import { useTheme } from 'hooks/common';

function AboutMe() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: '4rem',
        background: theme.bg.secondary,
      }}
    >
      <Content>
        <Box>
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
              minHeight: '65vh',
            }}
          >
            <Image
              src={mainProjectImage}
              alt="mainProject"
              style={{
                width: 'auto',
                maxWidth: '30vw',
                height: 'auto',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
            <Image
              src={mainProject2Image}
              alt="mainProject"
              style={{
                width: 'auto',
                maxWidth: '30vw',
                height: 'auto',
                objectFit: 'cover',
                position: 'absolute',
                top: '20%',
                left: '40%',
              }}
            />
            <Image
              src={mainProject3Image}
              alt="mainProject"
              style={{
                width: 'auto',
                maxWidth: '30vw',
                height: 'auto',
                objectFit: 'cover',
                position: 'absolute',
                top: '40%',
                left: '10%',
              }}
            />
          </Box>
        </Box>
      </Content>
    </Box>
  );
}

export default memo(AboutMe);
