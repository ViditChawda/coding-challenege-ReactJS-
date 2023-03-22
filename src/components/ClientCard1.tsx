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

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import Modals from './Modals';
import EditModal from "./EditModal";
import { BiDotsVerticalRounded } from 'react-icons/bi'
import DropDown from './DropDown';
import { Dropdown } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './custom.css'
import DATA from './DATA.js'
import Smallnav from './Smallnav';

const ClientCard1 = () => {


    const [modalData, setModalData] = useState({
        "id": "1",
        "Lead_Date": "May 26, 2019",
        "Name": "Shivam Balwani",
        "Number": "+91 987654321",
        "Email": "default@gmail.com",
        "Source": "Website",
        "Last_Updated": "25 june 2021",
        "Status": "New"
    });

    const [updateModalData, setUpdateModalData] = useState({
        "id": "1",
        "Lead_Date": "May 26, 2019",
        "Name": "Shivam Balwani",
        "Number": "+91 987654321",
        "Email": "default@gmaillmn.com",
        "Source": "Website",
        "Last_Updated": "25 june 2021",
        "Status": "New"
    })
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false);
    }
    const [data, setData] = useState<any>(DATA)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        const localData = localStorage.userData;
        if (localData)
            setData(JSON.parse(localData))
        else
            localStorage.userData = JSON.stringify(DATA)
    }, [])

    const syncData = (passedData) => {
        localStorage.userData = JSON.stringify(passedData)
        setData(passedData)
    }

    const handleAdd = (clientData: any) => {
        const newData = [
            ...data,
            {
                ...clientData.formData,
                Last_Updated: "26 june 2021",
                Lead_Date: "May 28, 2019",
                id: Math.floor(Math.random() * 1000000000),
            },
        ]

        syncData(newData)
    }

    const handleView = (id: number) => {
        const newData = data.filter(e => e.id == id);
        setModalData(newData[0]);
        handleShow();
    }
    const handleUpdate = (id: number) => {
        const newData = data.filter(e => e.id == id);
        setUpdateModalData(newData[0])
        setShowUpdateModal(true);
    }
    const updateFields = (id: string, formData: any) => {
        const newData = data.map(userData => {
            if (userData.id === id) {
                return {
                    ...userData,
                    ...formData,
                }
            }

            return userData
        })

        syncData(newData)
    }

    const handleDelete = (id: string) => {
        const newData = data.filter(currData => {
            return currData.id !== id
        })

        syncData(newData)
    }

    return (
        <div>
            <div className='p-3 mt-0 fs-5 fw-bolder'>
                Clients
            </div>
            <Smallnav/>
            <div className='m-5'>
                <Modals handleAdd={handleAdd} />
                <EditModal handleUpdate={updateFields} fieldData={updateModalData} handleClose={handleCloseUpdateModal} show={showUpdateModal} />
            </div>
            <div className='ml-5'>
                <Container className='my-custom-class'>
                   
                        <Row className='my-custom-row'>
                            <Col className='mt-5 mr-5'>Lead Date</Col>
                            <Col className='mt-5 mr-5'>Name</Col>
                            <Col className='mt-5 mr-5 number'>Number</Col>
                            <Col className='mt-5 mr-5 email'>Email</Col>
                            <Col className='mt-5 mr-5'>Source</Col>
                            <Col className='mt-5 mr-5'>Last Update</Col>
                            <Col className='mt-5 mr-5'>Status</Col>
                        </Row>
                        {data.map((e, i) => {
                            return <>

                                <Row className='my-custom-inner-row mt-2'>

                                    <Col className='p-3'>{e.Lead_Date}</Col>
                                    <Col className='p-3'>{e.Name}</Col>
                                    <Col className='p-3'>{e.Number}</Col>
                                    <Col className='p-3'>{e.Email}</Col>
                                    <Col className='p-3'>{e.Source}</Col>
                                    <Col className='p-3'>{e.Last_Updated}</Col>
                                    <Col className='p-3'>{e.Status}</Col>
                                    <Col className='p-3'>
                                        <Dropdown bsPrefix="">
                                            <Dropdown.Toggle  variant='light' className='dropdown'>
                                                <BiDotsVerticalRounded />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu >
                                                <Dropdown.Item onClick={() => handleUpdate(e.id)}>Edit</Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleDelete(e.id)}>Delete</Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleView(e.id)}>View</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>



                            </>
                        })}
                </Container>

            </div >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalData.Name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Name: {modalData.Name}</h4>
                    <h4>Name: {modalData.Lead_Date}</h4>
                    <h4>Name: {modalData.Number}</h4>
                    <h4>Name: {modalData.Email}</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default ClientCard1