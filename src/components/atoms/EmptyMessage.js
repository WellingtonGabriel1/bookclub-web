import { Flex } from '@chakra-ui/react'
import { Text } from './text'

export const EmptyMessage = ({ children }) => (
  <Flex
    mt={['24px', '48px']}
    alignItems="center"
    justifyContent="center"
    h="30px"
  >
    <Text>{children}</Text>
  </Flex>
)
