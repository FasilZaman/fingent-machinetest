import React from 'react'
import Header from '../Header/Header'
import {Table} from 'react-bootstrap'
import './Listproductstyle/Listproductstyle.css'

function Listproduct() {
    return (
        <div>
            <Header data='list' />
            <div className='main'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sl no</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Listproduct