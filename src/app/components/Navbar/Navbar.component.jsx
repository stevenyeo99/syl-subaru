"use client"

import Image from 'next/image';
import Link from 'next/link';
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
                <Link href="/" className='nav-link' passHref>
                  Home
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Model
                </DropdownToggle>
                <DropdownMenu right>
                  <Link href='/model/BRZ' style={{textDecoration: 'none'}} passHref>
                    <DropdownItem>BRZ</DropdownItem>
                  </Link>

                  <Link href='/model/CROSSTREK' style={{textDecoration: 'none'}} passHref>
                    <DropdownItem>CROSSTREK</DropdownItem>
                  </Link>
                  
                  <Link href='/model/FORESTER' style={{textDecoration: 'none'}} passHref>
                    <DropdownItem>FORESTER</DropdownItem>
                  </Link>
                  
                  <Link href='/model/WRX' style={{textDecoration: 'none'}} passHref>
                    <DropdownItem>WRX</DropdownItem>
                  </Link>
            
                  <Link href='/model/WRXWAGON' style={{textDecoration: 'none'}} passHref>
                    <DropdownItem>WRX WAGON</DropdownItem>
                  </Link>
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