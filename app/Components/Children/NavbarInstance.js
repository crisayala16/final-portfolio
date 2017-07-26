import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';

const NavbarInstance = (props) => {
	return(
		<div>
		<Navbar className='navi' inverse collapseOnSelect>
		    <Navbar.Header>
		      <Navbar.Toggle />
		    </Navbar.Header>
		    <Navbar.Collapse>
		      <Nav className='nav-list'>
		        <NavItem className='nav-item' eventKey={1}>
			        	<Link to='/'>HOME</Link>
		        </NavItem>
		        <NavItem className='nav-item' eventKey={2}>
			        	<Link to='/about'>ABOUT</Link>
		        </NavItem>
		        <NavItem className='nav-item' eventKey={3}>
			        	<Link to='/skills'>SKILLS</Link>
		        </NavItem>
		        <NavItem className='nav-item' eventKey={4}>
			        	<Link to='/portfolio'>PORTFOLIO</Link>
		        </NavItem>
		        <NavItem className='nav-item' eventKey={5}>
			        	<Link to='/contact'>CONTACT</Link>
		        </NavItem>
		      </Nav>
		    </Navbar.Collapse>
		</Navbar>

		</div>
	);
}

export default NavbarInstance;