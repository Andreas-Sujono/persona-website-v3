import React, { memo } from 'react';
import Container from 'components/common/Container';
import Content from 'components/common/Container/Content';
import Text from 'components/common/Text';
import Button from 'components/common/Button';
import Image from 'next/image';
import { Box } from '@mui/material';
import { useTheme } from 'hooks/common';
import styled from '@emotion/styled';

const StyledTitle = styled(Text)`
  font-size: 2.5rem;
  font-weight: 600;
  margin-right: 1rem;
`;

function Statistics() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        background: theme.bg.secondary,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
        border: `1px solid ${theme.text.highlight}`,
        borderRadius: '2rem',
        padding: '0.6rem 1rem',
        width: '100%',
        mt: 0,
        '> *': {
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Box>
        <StyledTitle color={theme.text.highlight}>5+</StyledTitle>
        <Text
          sx={{
            fontSize: '1.1rem',
            color: theme.text.secondary,
          }}
        >
          Years of Work Experience
        </Text>
      </Box>
      <Box>
        <StyledTitle color={theme.text.highlight}>12+</StyledTitle>
        <Text
          sx={{
            fontSize: '1.1rem',
            color: theme.text.secondary,
          }}
        >
          Blogs Written
        </Text>
      </Box>
      <Box>
        <StyledTitle color={theme.text.highlight}>4.5K</StyledTitle>
        <Text
          sx={{
            fontSize: '1.1rem',
            color: theme.text.secondary,
          }}
        >
          Blog Views/Month
        </Text>
      </Box>
      <Box>
        <StyledTitle color={theme.text.highlight}>78</StyledTitle>

        <Text
          sx={{
            fontSize: '1.1rem',
            color: theme.text.secondary,
          }}
        >
          Github Repos
        </Text>
      </Box>
    </Box>
  );
}

export default memo(Statistics);
