import { FlexContainer } from './styles'
import { ConnectButton } from '@rainbow-me/rainbowkit'

interface HelloWorldProps {
  foo?: string
}

const HelloWorld = ({}: HelloWorldProps) => {
  return (
    <FlexContainer>
      <div>Hey 👋</div>
      <ConnectButton />
    </FlexContainer>
  )
}

export default HelloWorld
