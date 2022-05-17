import React from 'react'
import { Form, Row, Col, Container, Button } from 'react-bootstrap'
import './Addproductstyle/Addproductstyle.css'


function Addproduct({ Count }) {
    let arr = []
    for (let i = 0; i < Count; i++) {
        arr.push(i)
    }
    console.log(arr);
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
                {arr.map(() =>
                    <Row className='mt-4'>
                        <Col>
                            <Form.Control className='itemsTextboxes' type="number" />
                        </Col>
                        <Col>
                            <Form.Control className='itemsTextboxes' type="number" />
                        </Col>
                        <Col>
                            <Form.Control className='itemsTextboxes' type="number" />
                        </Col>
                    </Row>
                )}
            </Container>
            <Container>
                <Button className='addButton ' type="submit" >
                    Add
                </Button>
            </Container>
        </div>
    )
}

export default Addproduct