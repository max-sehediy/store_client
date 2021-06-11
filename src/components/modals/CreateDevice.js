import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, FormControl, FormGroup, FormLabel, Modal, Row } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { Context } from '../..'
import { fetchBrands, fetchTypes } from '../../http/deviceAPI'




const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => { device.setTypes(data) })
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    // date
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState(null)


    // method
    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(el => el.number !== number))
    }
    const selectFile = (e) => {
        setFile(e.target.files[0])
    }
    const changeInfo = (key, value, number) => {
        setInfo.map(i => i.number === number ? { ...i, [key]: value } : i)
    }
    const addDevice = () => {
        console.log(`info`, info)
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Row className="m-3 px-4">
                        <Dropdown className='mr-2'>
                            <DropdownToggle className='text-uppercase'>
                                {device.selectedType.name || 'Select a type'}
                            </DropdownToggle>
                            <DropdownMenu>
                                {device.types.map(type =>
                                    <DropdownItem
                                        key={type.id}
                                        className='text-uppercase'
                                        onClick={() => device.setSelectedType(type)}
                                    >
                                        {type.name}
                                    </DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown >
                            <DropdownToggle variant='warning' className='text-uppercase'>
                                {device.selectedBrand.name || 'Select a brand'}
                            </DropdownToggle>
                            <DropdownMenu>
                                {device.brands.map(brand =>
                                    <DropdownItem
                                        key={brand.id}
                                        className='text-uppercase'
                                        onClick={() => device.setSelectedBrand(brand)}
                                    >
                                        {brand.name}
                                    </DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>
                    </Row>
                    <Row className="m-3 px-4 d-flex flex-column">
                        <FormGroup>
                            <FormLabel>
                                Enter the device name
                            </FormLabel>
                            <FormControl
                                placeholder='Iphone 13 pro MAX'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Enter the cost of the device
                            </FormLabel>
                            <FormControl
                                placeholder='19999'
                                type='number'
                                value={price}
                                onChange={e => Number(setPrice(e.target.value))}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Select a picture
                            </FormLabel>
                            <FormControl
                                placeholder='Enter the device name'
                                type='file'
                                onChange={selectFile}
                            />
                        </FormGroup>
                        <hr />
                        <Button
                            variant='outline-dark'
                            onClick={addInfo}>
                            Add new option
                        </Button>
                        {info.map(i =>
                            <Row className="my-3" key={i.number}>
                                <Col md={4}>
                                    <FormControl
                                        placeholder='Enter the name of the characteristic'
                                        value={i.title}
                                        onChange={e => changeInfo('title', e.target.value, i.number)}
                                    />
                                </Col>
                                <Col md={4}>
                                    <FormControl
                                        placeholder='Enter a description for the device'
                                        value={i.description}
                                        onChange={e => changeInfo('description', e.target.value, i.number)}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        variant="outline-danger"
                                        onClick={() => removeInfo(i.number)}
                                    >
                                        Delete
                                    </Button>
                                </Col>
                            </Row>
                        )}
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={addDevice}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
})
export default CreateDevice
