import React, { memo } from 'react';
import Text from 'components/common/Text';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';
import Content from 'components/common/Container/Content';
import bgImage from 'assets/home/about-me-bg.png';
import profileImage from 'assets/home/profile.png';
import experienceImage from 'assets/home/experience.png';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    subject: 'Frontend Dev',
    A: 99,
    fullMark: 100,
  },
  {
    subject: 'Backend Dev',
    A: 85,
    fullMark: 100,
  },
  {
    subject: 'Devops',
    A: 75,
    fullMark: 100,
  },
  {
    subject: 'Cloud Architect',
    A: 75,
    fullMark: 100,
  },
  {
    subject: 'Blockchain',
    A: 80,
    fullMark: 100,
  },
  {
    subject: 'Data Science',
    A: 60,
    fullMark: 100,
  },
];

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
          <Content sx={{ position: 'relative', paddingLeft: '20%' }}>
            <Grid container>
              <Grid item md={4}>
                <Box>
                  <Image
                    src={profileImage}
                    alt=""
                    style={{
                      width: '100%',
                      maxWidth: '200px',
                      height: 'auto',
                      maxHeight: '200px',
                      objectFit: 'cover',
                      zIndex: 1,
                      margin: 'auto',
                      display: 'block',
                    }}
                  />
                </Box>
              </Grid>
              <Grid item md={6}>
                <Text
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: '2rem',
                    margin: 'auto',
                    display: 'block',
                    ml: '2rem',
                  }}
                >
                  Andreas is a passionate and tech enthusiast with 4+ years of
                  working experience in more than 7 different companies with
                  diverse industries such as robotics, ed-tech, gaming,
                  blockchain, data, and cybersecurity company. He has expertise
                  in Frontend, Backend, Cloud Architect, Devops, and Blockchain
                  development
                </Text>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                mt: '5rem',
              }}
            >
              <Grid item xs={6}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar
                      name="Mike"
                      dataKey="A"
                      stroke="#e21a6dd2"
                      fill="#e21a6dd2"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={6}>
                <Image
                  src={experienceImage}
                  alt=""
                  style={{
                    width: '100%',
                    maxWidth: '360px',
                    height: 'auto',
                    objectFit: 'cover',
                    zIndex: 1,
                    display: 'block',
                  }}
                />
              </Grid>
            </Grid>
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
              maxHeight: '800px',
              objectFit: 'cover',
              zIndex: 1,
              borderRadius: '1rem 0 0 1rem',
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
              top: '48%',
              left: '52%',
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
