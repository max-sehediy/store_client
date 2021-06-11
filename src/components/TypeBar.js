import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap';
import { Context } from '../index';


const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ListGroup>
            {device.types.map(type => {
                return (
                    <ListGroup.Item
                        style={{ cursor: 'pointer' }}
                        active={type.id === device.selectedType.id}
                        onClick={() => { device.setSelectedType(type) }}
                        key={type.id}
                    >
                        {type.name.length === 2 ?
                            `${type.name.toUpperCase()}` :
                            `${type.name[0].toUpperCase()}${type.name.slice(1)}`}
                    </ListGroup.Item>)
            })}
        </ListGroup>
    )
})

export default TypeBar
