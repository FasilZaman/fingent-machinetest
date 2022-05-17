import React, { useContext, useState } from 'react'
import './Removeproductstyle/Removeproductstyle.css'
import { Form, Row, Col, Container, Button } from 'react-bootstrap'
import { productsContext } from '../../Context/Productcontext'



function Removeproduct({ Count }) {
    const [formData, setFormData] = useState()
    let arr = []
    const { productDetails } = useContext(productsContext)
    const [errorMsg, setErrorMsg] = useState(null)
    for (let i = 0; i < Count; i++) {
        arr.push(i)
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = () => {
        let error = ""
        for (let i = 0; i < Count; i++) {
            if (productDetails[formData[i + 'Code']]) {
                if (parseInt(productDetails[formData[i + 'Code']].quantity) < parseInt(formData[i + 'Quantity'])) {
                    productDetails[formData[i + 'Code']].quantity = 0
                } else {
                    productDetails[formData[i + 'Code']].quantity = parseInt(productDetails[formData[i + 'Code']].quantity) - parseInt(formData[i + 'Quantity'])
                }
            } else {
                error += " " + formData[i + 'Code']
            }
        }
        if (error) {
            setErrorMsg(error + 'is not available in the products')
        }
    }
    return (
        <div>
            <Container>
                {errorMsg && <p>{errorMsg}</p>}
                <Row className='mt-5' >
                    <Col>
                        <Form.Label className='itemsTextboxLabel'>Enter the Product code</Form.Label>
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
                            <Form.Control className='itemsTextboxes' type="number" name={`${i}Quantity`} onChange={handleChange} />
                        </Col>
                    </Row>
                )}
            </Container>
            <Container>
                <Button className='addButton ' type="submit" onClick={handleSubmit}>
                    Remove
                </Button>
            </Container>
        </div>
    )
}

export default Removeproduct