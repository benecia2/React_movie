import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css"

function Navigation() {
    const linkStyle={
        fontSize: "20px",
    }

    return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/about" style={linkStyle}>About</Nav.Link>
            <Nav.Link href="/poster" style={linkStyle}>Poster</Nav.Link>
            <Nav.Link href="/insert" style={linkStyle}>추가</Nav.Link>
            <Nav.Link href="/list" style={linkStyle}>전체보기</Nav.Link>
        </Nav>
    </Container>
    </Navbar>
    );
}

export default Navigation;