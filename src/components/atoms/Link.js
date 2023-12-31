import { Link as ChakraLink, Flex } from '@chakra-ui/react'

export const Link = ({ children, ...props }) => (
  <ChakraLink fontSize="14px" color="brand.darkGrey" {...props}>
    {children}
  </ChakraLink>
)

Link.Action = ({ Text, ActionText, ...props }) => (
  <Flex flexDir={['column', 'row']} w="100%" alignItems="center" justifyContent="center">
    <ChakraLink mr="4px" fontSize="16px" color="brand.darkGrey" {...props}>
      {Text}
    </ChakraLink>
    <ChakraLink
      fontWeight="bold"
      fontSize="16px"
      color="brand.black"
      {...props}
    >
      {ActionText}
    </ChakraLink>
  </Flex>
)

Link.Action.displayName = 'LinkAction'
