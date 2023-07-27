"use client"

import Image from 'next/image';
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
  NavbarText,
} from 'reactstrap';

import './Navbar.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand='md' light className='custom-color'>
          <NavbarBrand href="/" className='my-2'>
            <Image src='/logo.png' alt='Subaru Logo' width={200} height={120}/>
          </NavbarBrand>
          
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Model
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href='/'>Pricelist</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/'>Promo & News</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/'>Testimoni</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/'>About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/'>Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;