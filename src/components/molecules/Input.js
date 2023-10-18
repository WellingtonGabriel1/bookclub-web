import { useState } from 'react'
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export const Input = (props) => (
  <ChakraInput
    h="56px"
    fontSize="16px"
    focusBorderColor="brand.primary"
    {...props}
  />
)

Input.Password = (props) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <InputGroup size="md" {...props}>
      <Input
        focusBorderColor="brand.primary"
        pr="4.5rem"
        fontSize="16px"
        type={show ? 'text' : 'password'}
        placeholder="**************"
      />
      <InputRightElement h="100%">
        <Button
          h="100%"
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          size="sm"
          color="brand.primary"
          onClick={handleClick}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {show ? <ViewIcon boxSize="18px" /> : <ViewOffIcon boxSize="18px" />}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

Input.Password.displayName = 'InputPassword'
