import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Title = () => {
  return (
    <div>
      <Navbar bg='light' expand='lg' className='mb-2'>
        <Container>
          <Navbar.Brand href='/'>Rick and Morty</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
        </Container>
      </Navbar>
    </div>
  )
}

export default Title
