import React from 'react'
import { Form, Row, Col, Container, Button } from 'react-bootstrap'


function Removeproduct({ Count }) {
    let arr = []
    for (let i = 0; i < Count; i++) {
        arr.push(i)
    }
    return (
        <div>
            <Container>
                <Row className='mt-5' >
                    <Col>
                        <Form.Label className='itemsTextboxLabel'>Enter the Product code</Form.Label>
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
                    </Row>
                )}
            </Container>
            <Container>
                <Button className='addButton ' type="submit" >
                    Remove
                </Button>
            </Container>
        </div>
    )
}

export default Removeproduct