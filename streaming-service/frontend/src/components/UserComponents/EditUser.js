import {Button, Form, Modal} from 'react-bootstrap'
import {bindActionCreators} from "redux";
import {cancelCreateEditUser, initiateEditUser, updateUsername,
    updatePassword, updateEmail, updateBday} from "../../modules/user";
import {connect} from "react-redux";

function EditUser({show, userToEdit, username, password, bDay, email, cancelCreateEditUser,
                      initiateEditUser, updateUsername, updatePassword, updateEmail, updateBday}) {
    function handleSubmit(event) {
        event.preventDefault()

        initiateEditUser({...userToEdit, username, password})
    }

    return <Modal show={show} onHide={cancelCreateEditUser}>
        <Form onSubmit={handleSubmit}>
            <Form.Label>Username</Form.Label>
            <Form.Control type='username' value={username}
                          onChange={event => updateUsername(event.target.value)}/>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' value={password}
                          onChange={event => updatePassword(event.target.value)}/>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' value={email}
                          onChange={event => updateEmail(event.target.value)}/>
            <Form.Label>Birthday</Form.Label>
            <Form.Control type='date' value={bDay}
                          onChange={event => updateBday(event.target.value)}/>
            <Button type='submit'>Apply</Button>
        </Form>
    </Modal>
}

function mapStateToProps(state) {
    return {
        show: state.userReducer.showEditUser,
        userToEdit: state.userReducer.userToEdit,
        username: state.userReducer.username,
        password: state.userReducer.password,
        email: state.userReducer.email,
        bDay: state.userReducer.bDay
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({initiateEditUser, cancelCreateEditUser, updateUsername, updatePassword, updateEmail, updateBday}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)