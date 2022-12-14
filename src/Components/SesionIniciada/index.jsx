import { useContext } from 'react'

import { Button, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react'
import { FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import CartContext from '../../Context/CartContext'

const SesionIniciada = () => {
  const { token, logOut } = useContext(CartContext)
  const { username } = useContext(CartContext)

  return (
    <>
      <Menu>
        {token && (
          <MenuButton as={Button} bg={useColorModeValue('wheat')}>
            {<FaRegUser />}
          </MenuButton>
        )}
        <MenuList zIndex={'2'}>
          <Link to="/">
            <MenuItem>Bienvenid@ {username}</MenuItem>
          </Link>
          <Link to="/datos">
            <MenuItem>Mis datos</MenuItem>
          </Link>
          <Link to="/pedidos">
            <MenuItem>Mis pedidos</MenuItem>
          </Link>
          <Link to="/">
            <MenuItem onClick={() => logOut()}>Cerrar sesion</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  )
}
export default SesionIniciada
