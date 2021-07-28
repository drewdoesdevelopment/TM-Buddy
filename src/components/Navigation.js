import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.scss';

const Navigation = (props) => {
  return (
    <Navbar expand='sm' className='navbar--style' variant='dark'>
      <Container>
        <Navbar.Brand className='logo--text' href='#home'>
          TM Tools - {props.title}
        </Navbar.Brand>
        <Nav className='me-right nav--links'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#attendance'>Attendance</Nav.Link>
          <Nav.Link href='#reports'>Reports</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
