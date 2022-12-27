import React, { memo } from 'react';
import Text from 'components/common/Text';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';
import Content from 'components/common/Container/Content';

function MainContent() {
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
        <Box>dsds</Box>
      </Grid>
    </Grid>
  );
}

export default memo(MainContent);
