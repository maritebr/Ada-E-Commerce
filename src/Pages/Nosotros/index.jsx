import { Box, Button, Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Nosotros = () => {
  return (
    <>
      <Container maxW="container.xl" mt="5">
        <img
          src="https://okdiario.com/img/2022/06/13/error-404-cual-es-su-significado.jpg"
          alt=""
        />
        <Box display="flex" justifyContent="center" p="10">
          <Link to="/">
            <Button colorScheme="blue">Ir a home</Button>
          </Link>
        </Box>
      </Container>
    </>
  )
}

export default Nosotros
