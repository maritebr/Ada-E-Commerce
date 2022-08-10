import { useContext } from 'react'

import { Box, Container, Text, Heading } from '@chakra-ui/react'

import CartContext from '../../Context/CartContext'

const Datos = () => {
  const { username, email } = useContext(CartContext)
  return (
    <Container maxW="container.xl" mt="5">
      <Box w={'500px'} margin={'0 auto'} bgColor={'wheat'} p={'5'}>
        <Heading textAlign={'center'} p={'3'}>
          Mis Datos
        </Heading>
        <Text fontSize={'20px'} p={'3'}>
          {' '}
          Nombre: {username}
        </Text>
        <Text fontSize={'20px'} p={'3'}>
          {' '}
          Email: {email}
        </Text>
      </Box>
    </Container>
  )
}

export default Datos
