import Container from 'components/common/Container'
import WelcomeSection from './WelcomeSection'
import Statistics from './WelcomeSection/Statistics'
import JoinClass from 'components/Ads/JoinClass'
import Content from 'components/common/Container/Content'
import NavBar from './NavBar'

export default function Home() {
  return (
    <Container>
      <WelcomeSection />
      <Content>
        <Statistics />
        <JoinClass />
      </Content>
      <NavBar />
    </Container>
  )
}
