import React from 'react'
import Form from 'react-jsonschema-form'
import { JSONSchema6 } from "json-schema"

const mySchema: JSONSchema6 = {
    "required": [
        "name"
    ],
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
            "type" : "string",
            "title": "Name"
        },
        "Number": {
            "type" : "integer",
            "title": "Number"
        },
        "Notes": {
            "type" : "string",
            "title": "Notes"
        },
    }
};
const Modal = () => {
    return (
        <>
            <Form schema={mySchema} />
        </>
    )
}

export default Modal