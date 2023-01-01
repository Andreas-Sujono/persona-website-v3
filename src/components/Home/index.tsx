import Container from 'components/common/Container';
import WelcomeSection from './WelcomeSection';
import Statistics from './WelcomeSection/Statistics';
import JoinClass from 'components/Ads/JoinClass';
import JoinNewsletter from 'components/Ads/JoinNewsletter';
import Content from 'components/common/Container/Content';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import MainProjects from './MainProjects';
import { useTheme } from 'hooks/common';
import ProjectCertificates from './ProjectCertificates';
import Gallery from './Gallery';
import { Box } from '@mui/material';
import ReadBlogs from 'components/Ads/ReadBlogs';
import SupportMe from 'components/Ads/SupportMe';
import JoinCommunity from 'components/Ads/JoinCommunity';

export default function Home() {
  const theme = useTheme();

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
            justifyContent: 'center',
            alignItems: 'center',
            '> *:not(:last-child)': {
              mr: '1rem',
            },
            paddingY: '3rem',
          }}
        >
          <ReadBlogs />
          <SupportMe />
          <JoinCommunity />
        </Box>
      </Content>
    </Container>
  );
}
