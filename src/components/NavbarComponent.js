import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { connect } from "react-redux";
const mapStateToProps = (state) => {
    return {
      title:state.users.title
    };
  };
const NavbarComponent = (props) => {
    return (
        <Navbar variant="dark" bg="success" expand="lg">
        <Container>
          <Navbar.Brand href="/">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/help">Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default connect(mapStateToProps,null)(NavbarComponent)
