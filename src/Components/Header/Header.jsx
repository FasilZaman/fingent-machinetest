import React from 'react'
import {  Navbar, ButtonGroup, Button } from 'react-bootstrap'
import './Headerstyles/Headerstyles.css'


function Header() {
    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                <ButtonGroup className='buttonGroup'>
                    <Button className='button1' >Add product</Button>
                    <Button className='button1' >Remove product</Button>
                    <Button className='button1' >List product</Button>
                </ButtonGroup>
            </Navbar>
        </div>
    )
}

export default Header