import {Card, Button, Row, Col} from "react-bootstrap";
import {initiateDeleteUser, startEditUser} from "../../modules/user";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

function User({user, initiateDeleteUser, startEditUser}) {
    return <Card className="text-center" text='white' border='dark' bg='secondary' style={{ width: '9rem', height: '22rem'}}>
        <Card.Header>
            <Card.Title>Username:</Card.Title>
            <Card.Subtitle>{user.username}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
            <Card.Title>Email:</Card.Title>
            <Card.Subtitle>{user.email}</Card.Subtitle>
            <hr/>
            <Card.Title>Birthday:</Card.Title>
            <Card.Subtitle>{user.bDay?.toString()}</Card.Subtitle>
        </Card.Body>
        <Card.Footer>
            <Row>
                <Col><Button variant='primary' onClick={() => startEditUser(user)}>Edit</Button></Col>
                <Col><Button variant='danger' onClick={() => initiateDeleteUser(user.id)}>Delete</Button></Col>
            </Row>
        </Card.Footer>

    </Card>
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({initiateDeleteUser, startEditUser}, dispatch)
}

export default connect(undefined, mapDispatchToProps)(User)