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

import React from 'react'
import Table from 'react-bootstrap/Table';


const DATA = [
    {
        "Lead_Date": "May 26, 2019",
        "Name": "Shivam Balwani",
        "Number": "+91 987654321",
        "Email": "dummy@gmail.com",
        "Source": "Website",
        "Last_Updated": "25 june 2021",
        "Status": "New"
    },
    {
        "Lead_Date": "May 26, 2019",
        "Name": "Shivam Balwani",
        "Number": "+91 987654321",
        "Email": "dummy@gmail.com",
        "Source": "Website",
        "Last_Updated": "25 june 2021",
        "Status": "New"
    },
    {
        "Lead_Date": "May 26, 2019",
        "Name": "Shivam Balwani",
        "Number": "+91 987654321",
        "Email": "dummy@gmail.com",
        "Source": "Website",
        "Last_Updated": "25 june 2021",
        "Status": "New"
    },
    {
        "Lead_Date": "May 26, 2019",
        "Name": "Shivam Balwani",
        "Number": "+91 987654321",
        "Email": "dummy@gmail.com",
        "Source": "Website",
        "Last_Updated": "25 june 2021",
        "Status": "New"
    },
    {
        "Lead_Date": "May 26, 2019",
        "Name": "Shivam Balwani",
        "Number": "+91 987654321",
        "Email": "dummy@gmail.com",
        "Source": "Website",
        "Last_Updated": "25 june 2021",
        "Status": "New"
    },
    {
        "Lead_Date": "May 26, 2019",
        "Name": "Shivam Balwani",
        "Number": "+91 987654321",
        "Email": "dummy@gmail.com",
        "Source": "Website",
        "Last_Updated": "25 june 2021",
        "Status": "New"
    }, {
        "Lead_Date": "May 26, 2019",
        "Name": "Shivam Balwani",
        "Number": "+91 987654321",
        "Email": "dummy@gmail.com",
        "Source": "Website",
        "Last_Updated": "25 june 2021",
        "Status": "New"
    },
    {
        "Lead_Date": "May 26, 2019",
        "Name": "Shivam Balwani",
        "Number": "+91 987654321",
        "Email": "dummy@gmail.com",
        "Source": "Website",
        "Last_Updated": "25 june 2021",
        "Status": "New"
    }, {
        "Lead_Date": "May 26, 2019",
        "Name": "Shivam Balwani",
        "Number": "+91 987654321",
        "Email": "dummy@gmail.com",
        "Source": "Website",
        "Last_Updated": "25 june 2021",
        "Status": "New"
    },

]


const ClientCard1 = () => {
    return (
        <div>
            <div className='p-3 mt-0 fs-5 fw-bolder'>
                Clients
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
                    {DATA.map(({ Lead_Date, Name, Number, Email, Source, Last_Updated, Status }, i) => {
                        return <>
                            <tbody>
                                <tr>
                                    <td>{Lead_Date}</td>
                                    <td>{Name}</td>
                                    <td>{Number}</td>
                                    <td>{Email}</td>
                                    <td>{Source}</td>
                                    <td>{Last_Updated}</td>
                                    <td>{Status}</td>
                                </tr>
                            </tbody>
                        </>
                    })}
                </Table>

            </div>

        </div>
    )
}

export default ClientCard1