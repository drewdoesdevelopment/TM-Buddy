import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = (props) => {
  return (
    <Navbar expand='sm' className='navbar--style' variant='dark'>
      <Container>
        <Link to='/'>
          <Navbar.Brand className='logo--text' href='#home'>
            TM Tools - {props.title}
          </Navbar.Brand>
        </Link>
        <Nav className='me-right nav--links'>
          <Link to='/dashboard'>
            <Nav.Link href='#dashboard'>Dashboard</Nav.Link>
          </Link>
          <Link to='/performance'>
            <Nav.Link href='#attendance'>Performance</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
