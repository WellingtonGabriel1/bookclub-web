import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { registerCall } from 'services/api/requests'

export const RegisterScreen = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const mutation = useMutation((newUser) => registerCall(newUser), {
    onError: (error) => {
      toast({
        title: 'Falha ao criar a conta.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente.',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: () => {
      toast({
        title: 'Conta criada com sucesso.',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      navigate('/')
    }
  })

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmpassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Nome deve ter 3 caracteres.')
        .required('Nome é obrigatório.'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório.'),
      password: Yup.string()
        .min(6, 'Senha deve ter ao menos 6 caracteres')
        .required('Senha é obrigatório.'),
      confirmpassword: Yup.string()
        .min(6, 'Confirmar a senha deve ter ao menos 6 caracteres.')
        .required('Confirmar senha é obrigatório.')
        .oneOf([Yup.ref('password'), null], 'Senhas não são iguais.')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  })

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
          <Text.ScreenTitle mt="48px">Cadastro</Text.ScreenTitle>
          <Input
            type="text"
            id="name"
            name="name"
            value={values.name}
            error={errors.name}
            onChange={handleChange}
            mt="24px"
            placeholder="Nome completo"
          />
          <Input
            id="email"
            name="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
            mt="16px"
            placeholder="E-mail"
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            error={errors.password}
            onChange={handleChange}
            mt="16px"
            placeholder="Senha"
          />
          <Input.Password
            id="confirmpassword"
            name="confirmpassword"
            value={values.confirmpassword}
            error={errors.confirmpassword}
            onChange={handleChange}
            mt="16px"
            placeholder="Confirmar senha"
          />

          <Button
            isLoading={mutation.isLoading}
            onClick={handleSubmit}
            mb="12px"
            mt="24px"
          >
            Cadastrar
          </Button>
          <Link.Action
            onClick={() => navigate('/')}
            mt="8px"
            Text="Já possui uma conta?"
            ActionText="Faça login aqui."
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
