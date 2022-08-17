
import React from "react";
import { Outlet } from "react-router-dom";
import { Badge, Container, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const MainLayout = () => {
    const cartItemCount = useSelector(({cart}) => cart.items.length);
    return (
        <React.Fragment>
            <header>
                <Navbar className="main-navbar">
                    <Container>
                        <Link to="/" className="navbar-brand">RandoStore</Link>
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <nav className="navbar-nav">
                                <Link to="/cart" className="nav-link">Cart {cartItemCount ? `(${cartItemCount})` : ``}</Link>
                                <Link to="/addItem" className="nav-link outline">Add new Item</Link>
                            </nav >
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <div className="container py-5">
                <Outlet />
            </div>
        </React.Fragment>
    )
}

export default MainLayout;