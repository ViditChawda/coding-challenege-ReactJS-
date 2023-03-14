import React from 'react'
import { Button } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';


const ClientCard = () => {
  return (
    <>
      {/* <Button> button </Button> */}
      {/* <Row>
     <Col xs>Lead Date</Col>
     <Col xs>Name</Col>
     <Col xs>Number</Col>
     <Col xs>Email</Col>
     <Col xs>Soruce</Col>
     <Col xs>Last Updated</Col>
     <Col xs>Status</Col>
     </Row> */}
      <Nav
      activeKey="/home"
      // className='justify-content-center'
    >
      <Nav.Item className="ml-4">
        <Nav.Link href="/home">Lead Date</Nav.Link>
      </Nav.Item>
      <Nav.Item className='ml-5'>
        <Nav.Link eventKey="link-1">Name</Nav.Link>
      </Nav.Item>
      <Nav.Item className='ml-5'>
        <Nav.Link eventKey="link-2">Number</Nav.Link>
      </Nav.Item>
      <Nav.Item className='ml-5'>
        <Nav.Link eventKey="link-2">Email</Nav.Link>
      </Nav.Item>
      <Nav.Item className='ml-5'>
        <Nav.Link eventKey="link-2">Source</Nav.Link>
      </Nav.Item>
      <Nav.Item className='ml-5'>
        <Nav.Link eventKey="link-2">Last Update</Nav.Link>
      </Nav.Item>
      <Nav.Item className='ml-2'>
        <Nav.Link eventKey="link-2">Status</Nav.Link>
      </Nav.Item>
      
    </Nav>
      {/* <ListGroup horizontal>
        <ListGroup.Item className=''>Lead Date   </ListGroup.Item>
        <ListGroup.Item className=''>Shivam Balwani</ListGroup.Item>
        <ListGroup.Item className=''>+91 9356760105</ListGroup.Item>
        <ListGroup.Item className=''>dummy@gmail.com</ListGroup.Item>
        <ListGroup.Item className=''>Website</ListGroup.Item>
        <ListGroup.Item className=''>25 june 2021</ListGroup.Item>
        <ListGroup.Item className=''> <button>NEW</button> </ListGroup.Item>
      </ListGroup> */}
    </>
  )
}

export default ClientCard