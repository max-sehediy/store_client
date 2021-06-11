import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import CreateBrands from '../components/modals/CreateBrands';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';
// import { Context } from '../index';
// , { useContext }
const Admin = () => {

    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)


    return (
        <Container className='d-flex flex-column'>
            <Button className='mt-2 p-2' variant='outline-dark' onClick={() => { setTypeVisible(true) }}>
                Add new type
            </Button>
            <Button className='mt-2 p-2' variant='outline-dark' onClick={() => { setBrandVisible(true) }}>
                Add new brand
            </Button>
            <Button className='mt-2 p-2' variant='outline-dark' onClick={() => { setDeviceVisible(true) }}>
                Add new device
            </Button>
            <CreateType onHide={() => setTypeVisible(false)} show={typeVisible} />
            <CreateBrands onHide={() => setBrandVisible(false)} show={brandVisible} />
            <CreateDevice onHide={() => setDeviceVisible(false)} show={deviceVisible} />
        </Container>
    )
}

export default Admin
