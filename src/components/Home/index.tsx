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
    </Container>
  );
}
