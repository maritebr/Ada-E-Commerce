import { useContext } from 'react'

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import CartContext from '../../Context/CartContext'
import Producto from './Producto'

const Carrito = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cart, vaciarCarrito, calcularTotal, token } = useContext(CartContext)

  const toast = useToast()
  const total = calcularTotal()

  return (
    <>
      <Button onClick={onOpen} bg={useColorModeValue('none')}>
        {<BsCart />} {cart.length}
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrito</DrawerHeader>
          {!!cart.length || (
            <DrawerBody>
              <Text> No hay productos en el carrito ☹️</Text>
              <Link to="/tienda">
                <Button bgColor={'tan'} ml={'8'} mt={'10'}>
                  {' '}
                  Volver a la tienda{' '}
                </Button>
              </Link>
            </DrawerBody>
          )}

          {!!cart.length && (
            <>
              <DrawerBody>
                {cart.map((producto) => (
                  <Producto
                    producto={producto}
                    key={`cartProduct${producto.id}`}
                  />
                ))}
              </DrawerBody>
              <DrawerFooter display="flex" flexDir="column">
                <Text fontSize={'20px'} p={'5'} fontWeight={'bold'}>Total: ${total}</Text>
                {token && (
                  <Link to="/carrito">
                    <Button
                      variant="outline"
                      bgColor={'tan'}
                      mb={3}
                      w="full"
                      onClick={onClose}
                    >
                      Continuar compra
                    </Button>
                  </Link>
                )}
                <Button
                  variant="outline"
                  bgColor={'tan'}
                  mb={3}
                  w="full"
                  onClick={() => vaciarCarrito()}
                >
                  Vaciar Carrito
                </Button>
                {!!token || (
                  <Button
                    variant="outline"
                    mb={3}
                    w="full"
                    onClick={() =>
                      toast({
                        title: 'Debes estar logueado para finalizar la compra',
                        status: 'warning',
                        duration: 7000,
                        isClosable: true
                      })
                    }
                  >
                    Continuar compra
                  </Button>
                )}
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Carrito
