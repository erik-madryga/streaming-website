import User from "./User";
import {Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import EditUser from "./EditUser";

function UserList({users, deleteUser}) {
    const userArray = users.map(user => <Col><User key={user.id} user={user} delete={deleteUser}/></Col>)

    return <>
        <EditUser/>
        <Row>
            {userArray}
        </Row>
    </>
}

function mapStateToProps(state) {
    return {
        users: state.userReducer.users
    }
}

export default connect(mapStateToProps)(UserList)