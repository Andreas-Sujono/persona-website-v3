import React, { memo } from 'react';
import Text from 'components/common/Text';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';
import Content from 'components/common/Container/Content';
import bgImage from 'assets/home/about-me-bg.png';

function AboutMe() {
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{
        paddingTop: '5rem',
      }}
    >
      <Grid item xs={true}>
        <Box
          sx={{
            paddingY: '2rem',
            position: 'relative',
          }}
        >
          <Content sx={{ position: 'relative' }}>
            <Box>about me</Box>
          </Content>
        </Box>
      </Grid>
      <Grid
        item
        sx={{
          width: '30%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={bgImage}
            alt=""
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              zIndex: 1,
            }}
          />
          <Text
            sx={{
              zIndex: 2,
              fontSize: '3rem',
              color: 'white',
              fontFamily: 'Rock Salt',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              whiteSpace: 'nowrap',
            }}
          >
            ABOUT ME
          </Text>
        </Box>
      </Grid>
    </Grid>
  );
}

export default memo(AboutMe);
