import React from 'react';
import {Navbar,Container} from 'react-bootstrap';

function Header() {

  return  (
  <Navbar bg="dark" variant="dark">
  <Container>
    <div>
    <Navbar.Brand href="https://github.com/BilalAhmed-Dev?tab=repositories">
    <img
          src="/GitHub_Logo_White.png"
          width="70"
          height="30"
          className="d-inline-block align-top"
        />
   
    - Bilal Ahmed
    </Navbar.Brand>
    </div>
  </Container>
</Navbar>
  )
}

export default Header;