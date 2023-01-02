import React, { memo } from 'react';
import Text from 'components/common/Text';
import Image from 'next/image';
import { Box, Divider, Grid } from '@mui/material';
import Content from 'components/common/Container/Content';
import TextInput from 'components/common/Form/TextInput';
import Button from 'components/common/Button';
import { useTheme } from 'hooks/common';
import avatarImage from 'assets/home/avatar.webp';

function Footer() {
  const theme = useTheme();
  const titleTextColor = '#ffffff';
  const textColor = '#a3a2a2';

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
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: theme.text.highlight,
            height: '150px',
            padding: {
              md: '2rem',
              xs: '1rem',
            },
            borderRadius: '1rem',
          }}
        >
          <Text
            sx={{
              mr: '2rem',
              color: titleTextColor,
              fontSize: {
                md: '2.4rem',
                xs: '2rem',
              },
              mb: {
                md: 0,
                xs: '0rem',
              },
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
                mr: {
                  md: '2rem',
                  xs: '1rem',
                },
                color: titleTextColor,
              }}
            />
            <Button
              sx={{
                background: '#6485F9',
                fontSize: '1rem',
                width: 'max-content',
                minWidth: 'auto',
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
            '> *': {
              mb: '2rem',
            },
          }}
        >
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              mb: '2rem',
            }}
          >
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
                    color: titleTextColor,
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
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              mb: '2rem',
            }}
          >
            <Text
              sx={{
                color: titleTextColor,
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
          <Grid
            item
            xs={12}
            md={3}
            // sx={{
            //   mb: '2rem',
            // }}
          >
            <Text
              sx={{
                color: titleTextColor,
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
          opacity: 0.5,
        }}
      />
      <Text
        sx={{
          color: theme.text.secondary,
          textAlign: 'center',
          mt: '1rem',
          fontSize: '0.9rem',
        }}
      >
        @Copyright 2022 Andreas Sujono - All rights reserved
      </Text>
    </Box>
  );
}

export default memo(Footer);
