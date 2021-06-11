import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar'
import { Button, Container, Nav } from 'react-bootstrap';

import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constans';
import { useHistory, NavLink } from 'react-router-dom';


const NavBarMenu = observer(() => {
  const { user } = useContext(Context)
  const history = useHistory()

  const logout = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.clear()
    history.push(SHOP_ROUTE)
  }

  return (
    <div>
      <Navbar bg="dark" variant="light">
        <Container>
          <NavLink
            to={SHOP_ROUTE}
            style={{ color: 'yellow' }}
            className='btn btn-warning'
          >
            SENK
          </NavLink>
          {user.isAuth ?
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button
                variant={'outline-success'}
                onClick={() => history.push(ADMIN_ROUTE)}
              >
                Admin page
                </Button>
              <Button
                variant={'danger'} className=' ml-2'
                onClick={() => logout()}
              >
                Log out
                </Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button variant={'info'} className=' ml-2'
                onClick={() => history.push(LOGIN_ROUTE)} >Log in</Button>
            </Nav>
          }
        </Container>
      </Navbar>
    </div>
  )
})

export default NavBarMenu
