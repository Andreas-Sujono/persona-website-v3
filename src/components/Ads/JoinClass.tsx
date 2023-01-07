import React, { memo } from 'react';
import Text from 'components/common/Text';
import Button from 'components/common/Button';
import Image from 'next/image';
import { Box } from '@mui/material';
import { useTheme } from 'hooks/common';
import bgImage from 'assets/home/join-class.webp';
import useWindowDimensions from 'hooks/common/useDimension';
import Link from 'next/link';
import { url } from 'const/config';

function JoinClass() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const isMobile = width < 800;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '900px',
        background: theme.bg.secondary,
        // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '1rem',
        padding: '1rem 1.5rem',
        margin: 'auto',
        width: '100%',
        mt: 10,
        mb: 5,
        border: `1px solid ${theme.text.highlight}`,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          pb: '1rem',
          zIndex: 3,
        }}
      >
        <Text
          color={theme.text.highlight}
          sx={{
            fontSize: '1.5rem',
            fontWeight: '600',
            lineHeight: '1.8rem',
          }}
        >
          Join Class to Learn Web Development from the Best Engineer
        </Text>
        <Text
          color={theme.text.secondary}
          sx={{
            fontSize: '1rem',
            fontWeight: '400',
            mt: '0.8rem',
          }}
        >
          Upskills your skills to learn the most up to date web frontend
          technologies and other software enginering skills
        </Text>
        <Link href={url.JOIN_CLASS_URL}>
          <Button
            sx={{
              position: 'absolute',
              bottom: {
                md: '-42px',
                xs: '-36px',
              },
              left: 0,
              background: theme.bg.gradient,
            }}
            disabled
          >
            COMING SOON
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Image
          src={bgImage}
          alt=""
          style={{
            width: 'auto',
            height: 'auto',
            maxHeight: '160px',
            display: isMobile ? 'block' : 'block',
            position: isMobile ? 'absolute' : 'relative',
            bottom: isMobile ? '-98px' : '-12px',
            right: isMobile ? '-24px' : '0',
            zIndex: 1,
            opacity: isMobile ? 0.5 : 1,
          }}
        />
      </Box>
    </Box>
  );
}

export default memo(JoinClass);
