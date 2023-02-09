import { useState, useEffect } from 'react'
import './NavBar.css'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

function NavBar() {
    const [show, handleShow] = useState(false)
    const profileImage = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    return (
        <div>
            <header>
            <Navbar className={`nav${show && "-dark"}`} variant={show?"dark":"light"} scrolling dark expand="md" fixed="top">
            <Container fluid>
                    {/* <Navbar.Brand href="#home">
                        <Image
                            src={Logo}
                            className="d-inline-block align-top ml-auto img-brand-logo"
                            alt="Logo"
                        />
                    </Navbar.Brand> */}
                <Navbar.Brand href="/">Ride Share</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                    className="me-auto my-2 my-lg-0">
                </Nav>
                <Nav className="justify-content-end">
                    <a href='create-ride'>
                        <Button className="button-create-ride" variant="dark me-3" size="sm"><span>Create Ride</span></Button>
                    </a>
                    <Navbar.Brand href="account">
                        <Image
                            src={profileImage}
                            className="d-inline-block align-top ml-auto account-img"
                            alt="Profile Image"
                            roundedCircle
                        />
                    </Navbar.Brand>

                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
        </div>
    )
}

export default NavBar