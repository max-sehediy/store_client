import React, { useState } from 'react'
import { Button, Form, FormControl, Modal } from 'react-bootstrap'
import { createBrand } from '../../http/deviceAPI'

const CreateBrands = ({ show, onHide }) => {
    const [brand, setBrand] = useState('')
    const addBrand = () => {
        createBrand({ name: brand }).then(setBrand(''), onHide()).catch(err => console.log(`errAddBrand`, err))
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
                    Add new brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl
                        placeholder='Enter a name for the new brand'
                        value={brand}
                        onChange={e => setBrand(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={addBrand}>Add</Button>
            </Modal.Footer>
        </Modal>

    )
}
export default CreateBrands
