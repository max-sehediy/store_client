import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap'
import { Context } from '..'


const BrandBar = observer(() => {
    const { device } = useContext(Context)
    const confirm = 'success'
    const waiting = 'warning'
    return (
        <Row className='d-flex'
        >
            {device.brands.map(brand =>
                <Card
                    className='p-2 mx-2'
                    style={{ cursor: 'pointer' }}
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? confirm : waiting}
                >
                    {brand.name.toUpperCase()}
                </Card>
            )}
        </Row>
    )
})

export default BrandBar
