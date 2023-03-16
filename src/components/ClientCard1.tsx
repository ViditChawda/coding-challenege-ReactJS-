// import React from 'react'
// import ListGroup from 'react-bootstrap/ListGroup';
// import button from 'react-bootstrap/Button'

// const ClientCard1 = () => {
//     return (
//         <div>
//             <ListGroup horizontal>
//                 <ListGroup.Item className=''>May 26, 2019</ListGroup.Item>
//                 <ListGroup.Item className=''>Shivam Balwani</ListGroup.Item>
//                 <ListGroup.Item className=''>+91 9356760105</ListGroup.Item>
//                 <ListGroup.Item className=''>dummy@gmail.com</ListGroup.Item>
//                 <ListGroup.Item className=''>Website</ListGroup.Item>
//                 <ListGroup.Item className=''>25 june 2021</ListGroup.Item>
//                 <ListGroup.Item className=''> <button className=''>NEW</button> </ListGroup.Item>
//             </ListGroup>
//         </div>
//     )
// }

// export default ClientCard1

import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import Modals from './Modals';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import DropDown from './DropDown';
import { Dropdown } from 'react-bootstrap';
// import './index.css';

import DATA from './DATA.js'

const handleDelete = (id) => {
    var index = DATA.map((e) => {
        return e.id;
    }).indexOf(id);

    DATA.splice(index,1); 
}


const ClientCard1 = () => {
    return (
        <div>
            <div className='p-3 mt-0 fs-5 fw-bolder'>
                Clients
            </div>
            <div className='m-5'>
                <Modals />
            </div>
            <div className='p-5'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Lead Date</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Email</th>
                            <th>Source</th>
                            <th>Last Update</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DATA.map((e , i) => {
                            return <>

                                <tr>
                                    <td>{e.Lead_Date}</td>
                                    <td>{e.Name}</td>
                                    <td>{e.Number}</td>
                                    <td>{e.Email}</td>
                                    <td>{e.Source}</td>
                                    <td>{e.Last_Updated}</td>
                                    <td>{e.Status}</td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <BiDotsVerticalRounded />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={()=> alert("Edit")}>Edit</Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleDelete(e.id)}>Delete</Dropdown.Item>
                                                <Dropdown.Item onClick={() => alert("View")}>View</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>

                            </>
                        })}
                    </tbody>

                </Table>

            </div>

        </div>
    )
}

export default ClientCard1