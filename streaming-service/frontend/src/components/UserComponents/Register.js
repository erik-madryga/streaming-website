import {Button, Form, Modal} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {initiateAddUser} from "../../modules/user";

function Register({showNewUser, setShowNewUser, initiateAddUser}) {
    function handleClose() {
        setShowNewUser(false)
    }

    function handleNewUser(event) {
        event.preventDefault()
        handleClose()
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const email = document.getElementById('email').value
        const bDay = document.getElementById('bDay').value
        const firstName = document.getElementById('firstName').value
        const lastName = document.getElementById('lastName').value


        const newUser = {
            id: Math.random() * 999999 + 100,
            username,
            password,
            firstName,
            lastName,
            email,
            bDay
        }

        initiateAddUser(newUser)
    }

    return <Modal show={showNewUser} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Register New User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form >
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="username" placeholder="Username" id='username'/>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password" id='password'/>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="firstName" placeholder="First Name" id='firstName'/>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="lastName" placeholder="Last Name" id='lastName'/>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Email" id='email'/>
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control type="date" id='bDay'/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleNewUser}>
                Register
            </Button>
        </Modal.Footer>
    </Modal>
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({initiateAddUser}, dispatch)
}

export default connect(undefined, mapDispatchToProps)(Register)