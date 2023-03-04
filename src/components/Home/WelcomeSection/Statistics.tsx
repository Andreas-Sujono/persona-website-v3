import React, { memo } from 'react';
import Text from 'components/common/Text';
import { Box } from '@mui/material';
import { useTheme } from 'hooks/common';
import styled from '@emotion/styled';
import CountUp from 'react-countup';

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
        flexDirection: {
          md: 'row',
          xs: 'column',
        },
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
        <StyledTitle color={theme.text.highlight}>
          <CountUp end={5} />+
        </StyledTitle>
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
        <StyledTitle color={theme.text.highlight}>
          <CountUp end={18} />+
        </StyledTitle>
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
        <StyledTitle color={theme.text.highlight}>
          <CountUp end={25620} />+
        </StyledTitle>
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
        <StyledTitle color={theme.text.highlight}>
          <CountUp end={92} />
        </StyledTitle>

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
