import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, secondary, ...props }) => (
  <ChakraButton
    fontWeight="bold"
    fontSize="16px"
    borderRadius="16px"
    _hover={{ bg: secondary ? 'brand.greyDark' : 'brand.primary' }}
    h="56px"
    bg={secondary ? 'brand.greyDark' : 'brand.primary'}
    textColor={secondary ? 'brand.white' : 'brand.black'}
    {...props}
  >
    {children}
  </ChakraButton>
)
