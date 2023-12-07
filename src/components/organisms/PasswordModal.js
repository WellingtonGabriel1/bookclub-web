import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useToast
} from '@chakra-ui/react'
import { Text, Button } from 'components/atoms'
import { Input } from 'components/molecules'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { updateUserCall } from 'services/api/requests'

export const PasswordModal = ({ onClose }) => {
  const toast = useToast()

  const mutation = useMutation((data) => updateUserCall(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao atualizar senha.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente.',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'Senha atualizada com sucesso.',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
    }
  })

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      password: '',
      confirmpassword: ''
    },
    validationSchema: Yup.object({
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
    <Drawer size="sm" isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Alterar a Senha</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody>
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
            onClick={handleSubmit}
            isLoading={mutation.isLoading}
            w="100%"
            mt="64px"
          >
            Atualizar
          </Button>
        </DrawerBody>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
