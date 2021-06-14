import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Context } from '..'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import TypeBar from '../components/TypeBar'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI'
import Pages from '../components/Pages'

const Shop = observer(() => {
    const { device } = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => { device.setTypes(data) })
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, device.limit, device.page).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, []
    )
    useEffect(() => {
        fetchDevices(device.selectedBrand.id, device.selectedType.id, 2, device.page).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedBrand, device.selectedType])
    return (
        <Container>
            <Row className='p-2'>
                <Col md={3} >
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                    <Row className="justify-content-md-center" >
                        <Pages />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
})
export default Shop