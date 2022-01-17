import { Flex } from '@chakra-ui/react'

interface HelloWorldProps {
  foo?: string
}

const HelloWorld: React.FC<HelloWorldProps> = ({}): JSX.Element => {
  return (
    <Flex h={100} bg="gray.100" justifyContent="center" alignItems="center">
      <Flex>Hey 👋</Flex>
    </Flex>
  )
}

export default HelloWorld
