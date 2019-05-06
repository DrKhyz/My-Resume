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
						<NavItem>
							<NavLink href='https://github.com/DrKhyz/'>GitHub</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='https://www.linkedin.com/in/jonathan-galvao-diniz/'>LinkedIn</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Pages
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem href='/resume'>My resume</DropdownItem>
								<DropdownItem href='/portfolio'>PortFolio</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default MenuBar;
