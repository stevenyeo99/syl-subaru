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
          <NavbarBrand href="/">
            <Image src='/logo.png' alt='Subaru Logo' width={150} height={100}/>
          </NavbarBrand>
          
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <Link href="/" className='nav-link'>
                  Home
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Model
                </DropdownToggle>
                <DropdownMenu>
                  <Link href='/model/BRZ' style={{textDecoration: 'none'}}>
                    <DropdownItem>BRZ</DropdownItem>
                  </Link>

                  <Link href='/model/CROSSTREK' style={{textDecoration: 'none'}}>
                    <DropdownItem>CROSSTREK</DropdownItem>
                  </Link>
                  
                  <Link href='/model/FORESTER' style={{textDecoration: 'none'}}>
                    <DropdownItem>FORESTER</DropdownItem>
                  </Link>
                  
                  <Link href='/model/WRX' style={{textDecoration: 'none'}}>
                    <DropdownItem>WRX</DropdownItem>
                  </Link>
            
                  <Link href='/model/WRX_WAGON' style={{textDecoration: 'none'}}>
                    <DropdownItem>WRX WAGON</DropdownItem>
                  </Link>

                  <DropdownItem divider />

                  <Link href='/model/all' style={{textDecoration: 'none'}}>
                    <DropdownItem>Semua</DropdownItem>
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