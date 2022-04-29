import tw from 'twin.macro'
import Header from 'components/Header'

const FlexContainer = tw.div`flex  flex-col`

const Home = () => {
  return (
    <FlexContainer>
      <Header />
    </FlexContainer>
  )
}

export default Home
