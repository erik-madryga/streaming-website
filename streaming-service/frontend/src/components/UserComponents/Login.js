import {Button, Form, Row, Col} from "react-bootstrap"
import {useState} from "react"
import Register from './Register'
import {addingUser} from '../../modules/user'
import {initiateLogin} from '../../modules/login'
import {bindActionCreators} from "redux"
import {connect} from "react-redux"


function Login({initiateLogin, loginPending}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)

    function handleSubmit(event) {
        event.preventDefault()
        initiateLogin({username, password})
    }

    function handleCreateUser(users) {
        addingUser(users)
        setShow(false)
    }

    return <>
            <Form onSubmit={handleSubmit} style={{ width: '24rem'}}>
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder="Enter Username"
                              onChange={event => setUsername(event.target.value)}/>
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter Password"
                              onChange={event => setPassword(event.target.value)}/>

                <Register
                    showNewUser={show}
                    setShowNewUser={setShow}
                    handleAddUser={handleCreateUser}
                />


                <Row>
                    <Col>
                        <Button type="submit" disabled={loginPending}>Login</Button>
                    </Col>
                    <Col>
                        <Button onClick={handleShow} variant="secondary">
                            Click Here to Register
                        </Button>
                    </Col>
                </Row>
            </Form>
    </>

}

function mapStateToProps(state) {
    return {
        loginPending: state.loginPending
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({initiateLogin}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
