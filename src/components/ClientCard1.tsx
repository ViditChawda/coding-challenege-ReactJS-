import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import button from 'react-bootstrap/Button'

const ClientCard1 = () => {
    return (
        <div>
            <ListGroup horizontal>
                <ListGroup.Item className=''>May 26, 2019</ListGroup.Item>
                <ListGroup.Item className=''>Shivam Balwani</ListGroup.Item>
                <ListGroup.Item className=''>+91 9356760105</ListGroup.Item>
                <ListGroup.Item className=''>dummy@gmail.com</ListGroup.Item>
                <ListGroup.Item className=''>Website</ListGroup.Item>
                <ListGroup.Item className=''>25 june 2021</ListGroup.Item>
                <ListGroup.Item className=''> <button className=''>NEW</button> </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default ClientCard1