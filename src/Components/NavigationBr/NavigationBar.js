import React from 'react'
import { Nav,Navbar } from 'react-bootstrap'

function NavigationBar() {
    return (

      <Navbar className="font"fixed="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
          <Nav.Link href="#About">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="#Projects">Project</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="#Gallery">Gallery</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="#home">Resume</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
}

export default NavigationBar