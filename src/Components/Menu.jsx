import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';


export const Menu = () => {
  return (
    <>
    <div>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/home">Mid Burguer</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/cardapio">Cardápio</Nav.Link>
            <Nav.Link href="/carrinho">Carrinho</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
      
    </>
    
  )
}
