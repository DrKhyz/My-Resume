import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

const MenuBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<Navbar color='light' light expand='md' className='text-center'>
				<NavbarBrand href='/'>Main</NavbarBrand>
				<NavbarToggler onClick={() => setIsOpen(!isOpen)} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Pages
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem href='/resume'>Resume</DropdownItem>
								<DropdownItem href='/portfolio'>PortFolio</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
						<NavItem>
							<NavLink href='https://github.com/DrKhyz/' target='blank'>
								<i className='fab fa-github mr-1' />
								GitHub
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='https://www.linkedin.com/in/jonathan-galvao-diniz/' target='blank'>
								<i className='fab fa-linkedin mr-1' />
								LinkedIn
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default MenuBar;
