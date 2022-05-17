import React from 'react'
import {  Navbar, ButtonGroup, Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import './Headerstyles/Headerstyles.css'


function Header() {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar expand="lg" variant="light">
                <ButtonGroup size='lg' className='buttonGroup'>
                    <Button className='button1' onClick={()=>navigate('/')}  >Add product</Button>
                    <Button className='button1' onClick={()=>navigate('/removeproduct')} >Remove product</Button>
                    <Button className='button1' >List product</Button>
                </ButtonGroup>
            </Navbar>
        </div>
    )
}

export default Header