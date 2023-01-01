import React, { memo } from 'react';
import Text from 'components/common/Text';
import Image from 'next/image';
import { Box, Divider, Grid } from '@mui/material';
import Content from 'components/common/Container/Content';
import TextInput from 'components/common/Form/TextInput';
import Button from 'components/common/Button';
import { useTheme } from 'hooks/common';
import avatarImage from 'assets/home/avatar.png';

function Footer() {
  const theme = useTheme();
  const textColor = 'white';

  return (
    <Box
      sx={{
        background: '#000000',
        paddingY: '3rem',
        paddingBottom: '1rem',
        mt: '4rem',
        color: textColor,
      }}
    >
      <Content>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: theme.text.highlight,
            height: '150px',
            padding: '2rem',
            borderRadius: '1rem',
          }}
        >
          <Text
            sx={{
              mr: '2rem',
              color: textColor,
              fontSize: '2.4rem',
            }}
          >
            Subscribe Newsletter
          </Text>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
            }}
          >
            <TextInput
              fullWidth
              placeholder="Enter Your Email Address"
              sx={{
                mr: '2rem',
                color: textColor,
              }}
            />
            <Button
              sx={{
                background: '#6485F9',
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
        <Grid
          container
          sx={{
            mt: '3rem',
          }}
        >
          <Grid item md={5}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Image
                src={avatarImage}
                alt="Andreas"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '1rem',
                }}
              />
              <Box>
                <Text
                  sx={{
                    color: textColor,
                    fontSize: '1.2rem',
                    fontFamily: 'Rock Salt',
                  }}
                >
                  Andreas Sujono
                </Text>
                <Text
                  sx={{
                    color: '#a9a5a5',
                    fontSize: '1rem',
                    mt: '0.2rem',
                  }}
                >
                  Full Stack Developer
                </Text>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Text
              sx={{
                color: textColor,
                fontSize: '1.1rem',
                fontFamily: 'Rock Salt',
                mb: '1rem',
              }}
            >
              Resources
            </Text>
            <Text
              sx={{
                fontSize: '1rem',
                mb: '0.5rem',
                color: textColor,
              }}
            >
              About Me
            </Text>
            <Text
              sx={{
                fontSize: '1rem',
                mb: '0.5rem',
                color: textColor,
              }}
            >
              Blogs
            </Text>
            <Text
              sx={{
                fontSize: '1rem',
                mb: '0.5rem',
                color: textColor,
              }}
            >
              Join Community
            </Text>
            <Text
              sx={{
                fontSize: '1rem',
                mb: '0.5rem',
                color: textColor,
              }}
            >
              Support Me
            </Text>
          </Grid>
          <Grid item md={3}>
            <Text
              sx={{
                color: textColor,
                fontSize: '1.1rem',
                fontFamily: 'Rock Salt',
                mb: '1rem',
              }}
            >
              Contact
            </Text>
            <Text
              sx={{
                fontSize: '1rem',
                mb: '0.5rem',
                color: textColor,
              }}
            >
              andreassujono@gmail.com
            </Text>
            <Text
              sx={{
                fontSize: '1rem',
                mb: '0.5rem',
                color: textColor,
              }}
            >
              +6583066172
            </Text>
          </Grid>
        </Grid>
      </Content>
      <Divider
        sx={{
          background: theme.text.secondary,
          mt: '1rem',
        }}
      />
      <Text
        sx={{
          color: theme.text.secondary,
          textAlign: 'center',
          mt: '1rem',
        }}
      >
        @Copyright 2022 Andreas Sujono - All rights reserved
      </Text>
    </Box>
  );
}

export default memo(Footer);
