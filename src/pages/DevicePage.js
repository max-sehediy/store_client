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
    }, [])

    return (
        <Container className='mt-2'>
            <Row className='gy-2' gy-2>
                <Col sm={{ span: 8, order: 1 }} md={{ span: 4, order: 1 }} ><Button variant='outline-info' block className=''>foto 1</Button></Col>
                <Col sm={{ span: 4, order: 4 }} md={{ span: 4, order: 2 }} ><Button variant='outline-info' block className=''>raiting 2</Button></Col>
                <Col sm={{ span: 8, order: 3 }} md={{ span: 8, order: 4 }} ><Button variant='outline-info' block className=''>desc 3</Button></Col>
                <Col sm={{ span: 4, order: 2 }} md={{ span: 4, order: 3 }} ><Button variant='outline-info' block className=''>buy 4</Button></Col>

            </Row>
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
