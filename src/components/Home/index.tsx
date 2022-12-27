import Container from 'components/common/Container';
import WelcomeSection from './WelcomeSection';
import Statistics from './WelcomeSection/Statistics';
import JoinClass from 'components/Ads/JoinClass';
import Content from 'components/common/Container/Content';
import NavBar from './NavBar';
import AboutMe from './AboutMe';

export default function Home() {
  return (
    <Container>
      <WelcomeSection />
      <Content>
        <Statistics />
        <JoinClass />
      </Content>
      <NavBar />
      <AboutMe />
    </Container>
  );
}
