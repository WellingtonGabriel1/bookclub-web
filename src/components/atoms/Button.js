import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props }) => (
  <ChakraButton
    fontWeight="bold"
    fontSize="16px"
    borderRadius="16px"
    _hover={{ bg: 'brand.primary' }}
    h="56px"
    bg="brand.primary"
    {...props}
  >
    {children}
  </ChakraButton>
)
