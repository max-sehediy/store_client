import React, { useContext, useState } from 'react'
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constans';
import { Button, Card, Container, Form, FormControl, Row } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { registration, login } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';




const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            if (data) {
                user.setUser(data.email)
                user.setIsAuth(true)
                history.push(SHOP_ROUTE)
            }
        } catch (error) {
            console.log('error :>> ', error.response);
            alert(error.response.data.message)
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
            <Card className='p-5' style={{ width: 600 }}>
                <h2 className='m-auto'>{isLogin ? 'Sign in' : 'Create an account'}</h2>
                <Form className='d-flex flex-column'>
                    <FormControl
                        className='mt-3'
                        placeholder='Введіть email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></FormControl>
                    <FormControl
                        className='mt-3'
                        placeholder='Введіть пароль'
                        value={password}
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    ></FormControl>
                    <Row
                        className='d-flex justify-content-between mt-3 px-3'>
                        {isLogin ?
                            <div >
                            Don't have an account?<Link to={REGISTRATION_ROUTE} className='ml-2'>Create one</Link>
                            </div>
                            :
                            <div>
                            Already have an account?<Link to={LOGIN_ROUTE} className='ml-2'>Sign in</Link>
                            </div>
                        }
                        <Button
                            className=' align-self-end'
                            variant={'outline-success'}
                            onClick={click}
                        >
                            {isLogin ? 'Sign in' : 'Sign up'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container >
    )
}
)
export default Auth
