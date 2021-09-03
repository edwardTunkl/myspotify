import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

class MyNavbar extends Component {
  render(){
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#" className="text-success">
          Spotify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/">
              <div
                className={
                  this.props.location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </div>
            </Link>
            <Link to="/album">
              <div
                className={
                  this.props.location.pathname === "/album"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Album
              </div>
            </Link>
            <Link to="/artist">
              <div
                className={
                  this.props.location.pathname === "/artist"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Artist
              </div>
            </Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  this.props.onChange(e.target.value);
                }
              }}
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default withRouter(MyNavbar);
