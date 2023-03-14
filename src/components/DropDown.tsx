import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


const DropDown = () => {
  return (
    <ListGroup className=''>
      <ListGroup.Item>Edit</ListGroup.Item>
      <ListGroup.Item>View</ListGroup.Item>
      <ListGroup.Item>Delete</ListGroup.Item>
    </ListGroup>
  )
}

export default DropDown