import React, { useState } from 'react'
import Form from 'react-jsonschema-form'
import { JSONSchema6 } from "json-schema"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const mySchema: JSONSchema6 = {
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

type FieldData = {
  id: string;
  Lead_Date: string;
  Name: string;
  Number: string;
  Email: string;
  Source: string;
  Last_Updated: string;
  Status: string;
}
type EditModalProps = {
  fieldData: FieldData;
  show: boolean;
  handleClose: () => void;
  handleUpdate: (id: string, formData: any) => void;
}

const EditModal = (props: EditModalProps) => {
  const formData = {
    Name: props.fieldData.Name,
    Email: props.fieldData.Email,
    Source: props.fieldData.Source,
    Number: props.fieldData.Number,
    Status: props.fieldData.Status
  }
  return (
    <div className=''>
      <Modal show={props.show} onHide={props.handleClose}>
        <div style={{ zIndex: "3" }}>
          <Form formData={formData} schema={mySchema} className="p-5"
            onSubmit={(formData) => {
              props.handleUpdate(props.fieldData.id, formData.formData);
              props.handleClose();
            }} />
        </div>
      </Modal>
    </div>
  )
}

export default EditModal;