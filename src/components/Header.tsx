import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {BsBell} from 'react-icons/bs'
import {BsFillCircleFill} from 'react-icons/bs'

// import {TbGridDots} from 'react-icons/all'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className=''>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="150"
              height="50"
            //   className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <div className='text-white'>#BeAChangeMaker</div>
          <div className='text-white d-flex'> <div className='fs-4'><BsBell/></div> <div className='ml-1 fs-4'><BsFillCircleFill/></div> </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header