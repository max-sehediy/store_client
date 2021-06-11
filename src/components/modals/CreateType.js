import React, { useState } from 'react'
import { Button, Form, FormControl, Modal } from 'react-bootstrap'
import { createType } from '../../http/deviceAPI'



const CreateType = ({ show, onHide }) => {

    const [value, setValue] = useState('')
    console.log(`value`, value)
    const addType = () => {
        createType({ name: value }).then(setValue(''))

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
                    Add new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl
                        placeholder='Enter a name for the new type'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={addType}>Add</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default CreateType
