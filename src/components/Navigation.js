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
          <Nav.Link href='#dashboard'>Dashboard</Nav.Link>
          <Nav.Link href='#attendance'>Performance</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
