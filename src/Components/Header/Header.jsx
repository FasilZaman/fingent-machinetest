import React from 'react'
import { Navbar, ButtonGroup, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Headerstyles/Headerstyles.css'


function Header(props) {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar expand="lg" variant="light">
                <ButtonGroup size='lg' className='buttonGroup'>
                    {props.data === 'add' ? <Button className='button1 active' onClick={() => navigate('/')}  >Add product</Button> :
                        <Button className='button1' onClick={() => navigate('/')}  >Add product</Button>}
                    {props.data === 'remove' ? <Button className='button1 active' onClick={() => navigate('/removeproduct')} >Remove product</Button> :
                        <Button className='button1' onClick={() => navigate('/removeproduct')} >Remove product</Button>}
                    {props.data === 'list' ? <Button className='button1 active' onClick={() => navigate('/productlist')} >Product list</Button> :
                        <Button className='button1' onClick={() => navigate('/productlist')} >Product list</Button>}
                </ButtonGroup>
            </Navbar>
        </div>
    )
}

export default Header