import React, {Component} from 'react';
import {Navbar,Nav,MenuItem,NavDropdown,NavItem} from 'react-bootstrap';
import './Bar.css';

class Bar extends Component{
  
  render(){
    return(

      <Navbar inverse collapseOnSelect className="barstick">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Online XYZ</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="Join" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Sign Up</MenuItem>
              <MenuItem eventKey={3.2}>Log In</MenuItem>
            </NavDropdown>
            <NavItem eventKey={1} href="#">
              Our Vision
            </NavItem>
            <NavItem eventKey={2} href="#">
              Our Partners
            </NavItem>
            <NavItem eventKey={2} href="#">
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
   
  );
  }
  
}
  


export default Bar;



