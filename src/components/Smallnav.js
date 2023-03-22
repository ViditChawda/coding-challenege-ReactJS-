import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Smallnav = () => {
    return (
        <div className='mt-4'>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Clients</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Tab 3 
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Smallnav