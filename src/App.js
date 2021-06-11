import { observer } from 'mobx-react-lite';
import React, { useEffect, useContext, useState } from 'react'
import { Spinner } from 'react-bootstrap';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBarMenu from './components/NavBarMenu';
import { check } from './http/userAPI';
import { Context } from './index';



const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(data.email)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
    }, 1000);
  }, [])

  if (loading) {
    return <Spinner animation='grow' />
  }

  return (
    <BrowserRouter>
      <NavBarMenu />
      <AppRouter />
    </BrowserRouter>
  );
}
)
export default App;
