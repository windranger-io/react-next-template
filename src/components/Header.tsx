import tw from 'twin.macro'

interface HelloWorldProps {
  foo?: string
}

const FlexContainer = tw.div`flex h-32 bg-gray-100 justify-center items-center`

const HelloWorld: React.FC<HelloWorldProps> = ({}): JSX.Element => {
  return <FlexContainer>Hey 👋</FlexContainer>
}

export default HelloWorld
