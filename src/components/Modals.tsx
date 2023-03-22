import React, { useState } from 'react'
import Form from 'react-jsonschema-form'
import { JSONSchema6 } from "json-schema"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import './custom.css'

const mySchema: JSONSchema6 = {
    type: "object",
    // "required": [
    //     "name"
    // ],
    properties: {
        selectoption: {
            "type": "string",
            "title": "Status",
            enum: ["New", "Old"],
            default :"New"
        },
        selectoption1 : {
            "type": "string",
            "title": "Source",
            enum : ["Website", "Application"],
            default: 'Website'
        },
        "Name": {
            "type": "string",
            "title": "Name"
        },
        "Number": {
            "type": "integer",
            "title": "Number"
        },
        "Email": {
            "type": "string",
            "title": "Email"
        },
    }
};

const uiSchema = {
    selectOption: {
        "ui:widget": "select",
        "ui:placeholder": "New",
        "controloptions" : "custom-select"
    },
};

const Modals = (props: any) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='d-flex'>

            <div className='mt-2'>
                <BsSearch/>
            </div>
            <div className=''>

            </div>
            
            <Button variant="light" className="fw-bold fs-6" onClick={handleShow}>
                Add Lead <AiOutlinePlusCircle className='ml-4 mb-1 fw-bold fs-3' />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <div className='p-4 fs-5 fw-bolder bg-dark text-white'>
                    Lead
                </div>
                <div style={{ zIndex: "3" }}>
                    <Form schema={mySchema} uiSchema={uiSchema} className="p-5"
                        onSubmit={(formData) => {
                            console.log(formData);
                            props.handleAdd(formData)
                            handleClose()
                        }} />
                </div>

            </Modal>
        </div>


    )
}

export default Modals