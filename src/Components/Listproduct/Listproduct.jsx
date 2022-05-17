import React, { useContext } from 'react'
import Header from '../Header/Header'
import { Table } from 'react-bootstrap'
import './Listproductstyle/Listproductstyle.css'
import { productsContext } from '../../Context/Productcontext'

function Listproduct() {
    const { productDetails } = useContext(productsContext)
    let products = []
    for (let i in productDetails) {
        products.push(i)
        console.log(products);
    }
    return (
        <div>
            <Header data='list' />
            <div className='main'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sl no</th>
                            <th>Product code</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((Code,i)=>
                        <tr>
                        <td>{i+1}</td>
                        <td>{Code}</td>
                        <td>{productDetails[Code].name}</td>
                        <td>{productDetails[Code].quantity}</td>
                    </tr>
                    )

                    }
                        
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Listproduct