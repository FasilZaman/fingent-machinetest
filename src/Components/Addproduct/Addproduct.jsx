import React, { useState, useContext } from 'react'
import { Form, Row, Col, Container, Button } from 'react-bootstrap'
import './Addproductstyle/Addproductstyle.css'
import { productsContext } from '../../Context/Productcontext'


function Addproduct({ Count }) {
    let arr = []
    const [formData, setFormData] = useState()
    const { productDetails } = useContext(productsContext)
    for (let i = 0; i < Count; i++) {
        arr.push(i)
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = () => {
        console.log(formData);
        for (let i = 0; i < Count; i++) {
            if (productDetails[formData[i + 'Code']]) {
                productDetails[formData[i + 'Code']].quantity = parseInt(productDetails[formData[i + 'Code']].quantity) + parseInt(formData[i + 'Quantity'])
            } else {
                productDetails[formData[i + 'Code']] = { name: formData[i + 'Name'], quantity: formData[i + 'Quantity'] }
            }
        }
    }
    return (
        <div>
            <Container>
                <Row className='mt-5' >
                    <Col>
                        <Form.Label className='itemsTextboxLabel'>Enter the Product code</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label className='itemsTextboxLabel'>Enter the Product name</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label className='itemsTextboxLabel'>Enter the Quantity</Form.Label>
                    </Col>
                </Row>
                {arr.map((i) =>
                    <Row className='mt-4'>
                        <Col>
                            <Form.Control className='itemsTextboxes' type="text" name={`${i}Code`} onChange={handleChange} />
                        </Col>
                        <Col>
                            <Form.Control className='itemsTextboxes' type="text" name={`${i}Name`} onChange={handleChange} />
                        </Col>
                        <Col>
                            <Form.Control className='itemsTextboxes' type="number" name={`${i}Quantity`} onChange={handleChange} />
                        </Col>
                    </Row>
                )}
            </Container>
            <Container>
                <Button className='addButton ' onClick={handleSubmit} type="submit" >
                    Add
                </Button>
            </Container>
        </div>
    )
}

export default Addproduct