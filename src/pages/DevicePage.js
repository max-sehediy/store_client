import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import backgroundImage from '../assets/starBackground1.png';
import { fetchOneDevice } from '../http/deviceAPI';


const DevicePage = observer(() => {
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
        console.log(`device`, device)
    }, [])

    return (
        <Container className='mt-2'>
            <Row>
                <Col md={4}>
                    <Image src={process.env.REACT_APP_API_URL + device.img} height={300} />
                </Col>
                <Col md={4}>
                    <Row className='d-flex align-items-center'>
                        <p className='h2'>
                            {device.name}
                        </p>
                        <div className='d-flex justify-content-center align-items-center'
                            style={{ background: `url(${backgroundImage}) no-repeat center center`, width: 250, height: 250, backgroundSize: 'cover', fontSize: 64 }}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className='d-flex align-items-center justify-content-around border-warning'
                        style={{ height: 300, border: '5px solid yellow ' }}>
                        {/* <div className='h3'>
                            Price:
                        {device.price.length > 3 ?
                                `${device.price.slice(0, 2)}.${device.price.slice(2)}`
                                :
                                device.price} $
                         </div> */}
                        <div className='h3'>{device.price}</div>
                        <Button variant='outline-success'>Add to Cart</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-2'>
                <div className='text-uppercase h2 py-2'>description:</div>
                {device.info.map((info, index) =>
                    <Row key={info.id} className=' p-3' style={{ background: index % 2 === 0 ? 'lightgray' : 'transperent' }}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
})
export default DevicePage
