import React, {useState} from 'react'
import Form from 'react-jsonschema-form'
import { JSONSchema6 } from "json-schema"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const mySchema: JSONSchema6 = {
    // "required": [
    //     "name"
    // ],
    "properties": {
        "Status": {
            "type": "string",
            "title": "Status"
        },
        "Source": {
            "type": "string",
            "title": "Source"
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

const Modals = (props: any) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className=''>
            <Button variant="primary" onClick={handleShow}>
                Add Client
            </Button>

            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
                <div style={{ zIndex:"3" }}><Form schema={mySchema} className="p-5"
                onSubmit={(formData) => {
                    props.handleAdd(formData)
                    handleClose()
                }} /></div>
                
            </Modal>
        </div>

       
    )
}

export default Modals