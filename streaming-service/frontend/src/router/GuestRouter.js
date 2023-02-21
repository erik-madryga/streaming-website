import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import ProfilesPage from "../pages/ProfilesPage";
import {Badge, Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import UsersPage from "../pages/UsersPage";
import MoviesPage from "../pages/MoviesPage";


function GuestRouter() {

    return (
        <Router>
            <Navbar variant="dark" id="navbar" expand="lg" sticky="top-0">
                <>
                    <Link to="/"> <img className="logo ms-3 me-5" src="http://www.logo-designer.co/wp-content/uploads/2018/05/2018-bestbuy-new-logo-design.png" alt="betterbuy"/></Link>
                    <Navbar.Toggle aria-controls="navbar-nav"><span>
            Menu
                </span></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-2 ">
                            <Nav.Item>
                                <Link className="link-item" to="/">Home </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link className="link-item" to="/Login">Login </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </>

            </Navbar>

            <hr/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Login' element={<LoginPage/>}/>
                <Route path='/Users' element={<Home/>}/>
                <Route path='/Profiles' element={<Home/>}/>
                <Route path='/Movies' element={<MoviesPage/>}/>
            </Routes>
        </Router>
    )
}

export default GuestRouter