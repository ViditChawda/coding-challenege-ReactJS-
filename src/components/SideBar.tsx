import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import {AiOutlineHome} from 'react-icons/ai'
import {BsChatSquare} from 'react-icons/bs'
import {AiOutlineCalendar} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {RiMiniProgramLine} from 'react-icons/ri'
import {CgBox} from 'react-icons/cg'
import {BiCoinStack} from 'react-icons/bi'
import {GiBanknote} from 'react-icons/gi'
import {AiOutlineSetting} from 'react-icons/ai'

const SideBar = () => {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item className='d-flex bg-dark text-white'> <div className='mr-2 fs-6'><AiOutlineHome/> </div> Home</ListGroup.Item>
                <ListGroup.Item className='d-flex bg-dark text-white'> <div className='mr-2 fs-6'><BsChatSquare/> </div> Chats</ListGroup.Item>
                <ListGroup.Item className='d-flex bg-dark text-white'> <div className='mr-2 fs-6'><AiOutlineCalendar/> </div> Scheldule</ListGroup.Item>
                <ListGroup.Item className='d-flex bg-dark text-white'> <div className='mr-2 fs-6'><BsPerson/> </div> Client</ListGroup.Item>
                <ListGroup.Item className='d-flex bg-dark text-white'> <div className='mr-2 fs-6'><RiMiniProgramLine/> </div> Program</ListGroup.Item>
                <ListGroup.Item className='d-flex bg-dark text-white'> <div className='mr-2 fs-6'><CgBox/> </div> Packages</ListGroup.Item>
                <ListGroup.Item className='d-flex bg-dark text-white'> <div className='mr-2 fs-6'><BiCoinStack/> </div> Resources</ListGroup.Item>
                <ListGroup.Item className='d-flex bg-dark text-white'> <div className='mr-2 fs-6'><GiBanknote/> </div> Finance</ListGroup.Item>
                <ListGroup.Item className='d-flex bg-dark text-white'> <div className='mr-2 fs-6'><AiOutlineSetting/> </div> Setting</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default SideBar