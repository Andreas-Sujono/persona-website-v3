import React, { memo } from 'react';
import Text from 'components/common/Text';
import Image from 'next/image';
import bgImage from 'assets/home/side-project-bg.png';
import { Box, Grid } from '@mui/material';

function ProjectCertificates() {
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
      <Box>about me</Box>
    </Box>
  );
}

export default memo(ProjectCertificates);
