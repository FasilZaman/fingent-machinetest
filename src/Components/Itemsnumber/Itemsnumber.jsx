import React, { useState } from 'react'
import './Itemsnumberstyle/Itemsnumber.css'
import { Form, Button } from 'react-bootstrap'
import Addproduct from '../Addproduct/Addproduct'
import Removeproduct from '../Removeproduct/Removeproduct'



function Itemsnumber(probs) {
    let page = probs.page
    const [itemsCount, setItemsCount] = useState()
    const [submit, setSubmit] = useState(false)
    return (
        <div>
            <div className='main'>
                <Form.Label className='itemsTextboxLabel'>Enter the number of items</Form.Label>
                <div className='textboxOuter'>
                    <Form.Control className='itemsTextbox' type="number" onChange={(e) => {
                        setItemsCount(e.target.value)
                        setSubmit(false)
                    }} />
                    <Button className='button' type="submit" onClick={() => setSubmit(true)}>
                        Submit
                    </Button>
                </div>
               {itemsCount > 0 && submit ? page === 'Addproduct' ? <Addproduct Count={itemsCount}/> :<Removeproduct /> : ''}
            </div>
        </div>
    )
}

export default Itemsnumber