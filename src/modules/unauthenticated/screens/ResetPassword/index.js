import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
// import { useNavigate } from 'react-router-dom'

export const ResetPasswordScreen = () => {
  // const navigate = useNavigate()
  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        alignItems={['center', 'flex-start']}
        justifyContent="center"
        paddingLeft={['0px', '0px', '0px', '112px']}
        padding={['24px', '48px', '80px', '112px']}
        flexDir="column"
        w={['100%', '100%', '100%', '40%']}
        h="100%"
      >
        <Flex flexDir="column" w={['100%', '100%', '100%', '416px']}>
          <Image src="/img/logo.svg" alt="BookClub Logo" w="160px" h="48px" />
          <Text.ScreenTitle mt="48px">Nova senha</Text.ScreenTitle>
          <Text>Digite o código enviado e uma nova senha  nos campos abaixo:</Text>
          <Input mt="24px" placeholder="Ex: 0000" />
          <Input.Password mt="16px" placeholder="Nova senha" />
          <Input.Password mt="16px" placeholder="Confirmar nova senha" />

          <Button mb="12px" mt="24px">Salvar</Button>
          <Link.Action
            mt="8px"
            Text="Não recebeu o código?"
            ActionText="Clique aqui para reenviar."
          />
        </Flex>
      </Flex>
      <Flex
        w={['0%', '0%', '0%', '60%']}
        h="100%"
        backgroundImage="url('/img/auth_background.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="32px"
        borderBottomLeftRadius="32px"
      />
    </Flex>
  )
}
