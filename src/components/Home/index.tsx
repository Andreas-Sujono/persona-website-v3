import dynamic from 'next/dynamic';

import Container from 'components/common/Container';
import Content from 'components/common/Container/Content';
// import WelcomeSection from './WelcomeSection';
// import Statistics from './WelcomeSection/Statistics';
import JoinClass from 'components/Ads/JoinClass';
import JoinNewsletter from 'components/Ads/JoinNewsletter';
import NavBar from './NavBar';
// import AboutMe from './AboutMe';
// import MainProjects from './MainProjects';
import { useTheme } from 'hooks/common';
// import ProjectCertificates from './ProjectCertificates';
// import Gallery from './Gallery';
import { Box } from '@mui/material';
import ReadBlogs from 'components/Ads/ReadBlogs';
import SupportMe from 'components/Ads/SupportMe';
import JoinCommunity from 'components/Ads/JoinCommunity';
import Footer from './Footer';
import useWindowDimensions from 'hooks/common/useDimension';

const WelcomeSection = dynamic(() => import('./WelcomeSection'), {
  loading: () => <></>,
});
const Statistics = dynamic(() => import('./WelcomeSection/Statistics'), {
  loading: () => <></>,
});
const AboutMe = dynamic(() => import('./AboutMe'), {
  loading: () => <></>,
});
const MainProjects = dynamic(() => import('./MainProjects'), {
  loading: () => <></>,
});
const ProjectCertificates = dynamic(() => import('./ProjectCertificates'), {
  loading: () => <></>,
});
const Gallery = dynamic(() => import('./Gallery'), {
  loading: () => <></>,
});

export default function Home() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const isMobile = width < 700;

  return (
    <Container
      style={{
        background: theme.bg.primary,
      }}
    >
      <WelcomeSection />
      <Content>
        <Statistics />
        <JoinClass />
      </Content>
      <NavBar />
      <AboutMe />
      <MainProjects />
      <ProjectCertificates />
      <JoinNewsletter />
      <Gallery />
      <Content>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            // flexDirection: {
            //   md: 'row',
            //   xs: 'column',
            // },
            justifyContent: {
              md: 'space-between',
              xs: 'center',
            },
            alignItems: 'center',
            '> *': {
              mb: '2rem',
            },
            '> *:not(:last-child)': {
              mr: isMobile ? 0 : '1rem',
            },
            paddingY: {
              md: '3rem',
              xs: '2rem',
            },
          }}
        >
          <ReadBlogs />
          <SupportMe />
          <JoinCommunity />
        </Box>
      </Content>
      <Footer />
    </Container>
  );
}
