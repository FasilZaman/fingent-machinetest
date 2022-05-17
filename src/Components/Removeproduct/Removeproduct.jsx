import React,{useContext} from 'react'
import './Removeproductstyle/Removeproductstyle.css'
import { Form, Row, Col, Container, Button } from 'react-bootstrap'
import { productsContext } from '../../Context/Productcontext'



function Removeproduct({ Count }) {
    let arr = []
    const { productDetails } = useContext(productsContext)
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
                            <Form.Control className='itemsTextboxes' type="text" />
                        </Col>
                        <Col>
                            <Form.Control className='itemsTextboxes' type="number" />
                        </Col>
                    </Row>
                )}
            </Container>
            <Container>
                <Button className='addButton ' type="submit" onClick={()=>console.log(productDetails)}>
                    Remove
                </Button>
            </Container>
        </div>
    )
}

export default Removeproduct