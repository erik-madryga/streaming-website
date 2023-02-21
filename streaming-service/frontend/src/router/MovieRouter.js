import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import ProfilesPage from "../pages/ProfilesPage";
import MoviesPage from "../pages/MoviesPage";
import {Badge, Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import UsersPage from "../pages/UsersPage";
import LogoutBtn from "../components/UserComponents/LogoutBtn";
import {connect} from "react-redux"



function MovieRouter({isLoggedIn}) {
    console.log(isLoggedIn)
    return (

        <Router>
            <Navbar variant="dark" id="navbar" expand="lg" sticky="top-0">

                <>

                    <Link to="/"> <img className="logo ms-3 me-5" src="http://www.logo-designer.co/wp-content/uploads/2018/05/2018-bestbuy-new-logo-design.png"
                                       alt="betterbuy"/></Link>
                    <Navbar.Toggle aria-controls="navbar-nav"><span>
            Menu
                </span></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-2">

                            {isLoggedIn ? <>
                                    <Nav.Item>
                                    <Link className="link-item" to="/">Home </Link>
                                </Nav.Item>

                                    <Nav.Item>
                                        <Link className="link-item" to="/Users">Users</Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Link className="link-item" to="/Profiles">Profiles</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link className="link-item" to="/Movies">Movies</Link>
                                    </Nav.Item>
                                </>
                                : ''}
                            {!isLoggedIn ? <Nav.Item>
                                <Link className="link-item" to="/Login">Login</Link>
                                </Nav.Item> : ''}
                        </Nav>
                        <Nav className='ms-auto'>

                            {/*<Nav.Item className={'m-1'}>*/}
                            {/*    <Button onClick={themeToggler}>Switch Theme</Button>*/}
                            {/*</Nav.Item>*/}
                            <Nav.Item className={'m-1'}>
                                <LogoutBtn/>
                            </Nav.Item>
                        </Nav>

                    </Navbar.Collapse>
                </>

            </Navbar>

            <hr/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                {isLoggedIn ? <><Route path='/Login' element={<LoginPage/>}/>
                    <Route path='/Users' element={<UsersPage/>}/>
                    <Route path='/Profiles' element={<ProfilesPage/>}/>
                    <Route path='/Movies' element={<MoviesPage/>}/></> :
                    <>
                        <Route path='/Login' element={<LoginPage/>}/>
                        <Route path='/Users' element={<LoginPage/>}/>
                        <Route path='/Profiles' element={<LoginPage/>}/>
                        <Route path='/Movies' element={<LoginPage/>}/>
                    </>
                    }

            </Routes>
        </Router>
    )
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn
    }
}
export default connect(mapStateToProps)(MovieRouter)