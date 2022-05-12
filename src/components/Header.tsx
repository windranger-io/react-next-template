import { FlexContainer } from './styles'

interface HelloWorldProps {
  foo?: string
}

const HelloWorld = ({}: HelloWorldProps) => {
  return <FlexContainer>Hey 👋</FlexContainer>
}

export default HelloWorld
