import {Container} from "react-bootstrap"
import {deletingUser} from "../modules/user";
import {connect} from "react-redux"
import UserList from "../components/UserComponents/UserList";

function UsersPage({users, dispatch}) {

    function handleDeleteUser(id) {
        dispatch(deletingUser(id))
    }


    return <>
        <h1>Users</h1>
        <p>Welcome to the User Page. Here displays a list of users.</p>
        <Container fluid>
            <h4>List of Users</h4>
            <UserList users={users} deleteUser={handleDeleteUser}/>
        </Container>
    </>
}

function mapStateToProps(state) {
    return{
        users: state.userReducer.users
    }
}

export default connect(mapStateToProps)(UsersPage)