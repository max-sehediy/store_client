import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import star from '../assets/star.png';
import { DEVICE_ROUTE } from '../utils/constans';




const DeviceItem = ({ device }) => {
    const history = useHistory()
    return (
        <Col md={4} className='mt-2' onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{ width: 150, cursor: 'pointer' }} border='light'>
                <Image src={process.env.REACT_APP_API_URL + device.img} rounded />
                <div className='d-flex justify-content-between align-items-center p-1 text-black-50'>
                    <div className='' style={{ fontStyle: 'italic' }}>Apple</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image src={star} rounded style={{ width: 20 }} />
                    </div>
                </div>
                <p className='px-1 fst-italic text-uppercase text-info'>{device.name}</p>
            </Card>
        </Col>
    )
}

export default DeviceItem
