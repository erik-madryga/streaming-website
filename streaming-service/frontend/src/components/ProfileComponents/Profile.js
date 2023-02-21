import {Card, Button, Row, Col} from "react-bootstrap";
import {initiateDeleteProfile, startEditProfile} from "../../modules/user";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

function Profile({profile, initiateDeleteProfile, startEditProfile}) {
    return <>
        <Card className="text-center" border='dark' text='white' bg='secondary' style={{ width: '9rem'}}>
            <Card.Header>
                <Card.Img className='profile-img' variant='top' src={profile.profilePicture} style={{ height: '10rem'}}/>
            </Card.Header>
            <Card.Body>
                <Card.Title>Name:</Card.Title>
                <Card.Subtitle>{profile.profileName}</Card.Subtitle>
                <hr/>
                <Card.Title>Age:</Card.Title>
                <Card.Subtitle>{profile.profileAge}</Card.Subtitle>
                <hr/>
                <Card.Title>Pronouns</Card.Title>
                <Card.Subtitle>{profile.profilePronouns}</Card.Subtitle>
                <hr/>
                <Card.Title>Color</Card.Title>
                <Card.Subtitle>{profile.profileColor}</Card.Subtitle>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col><Button variant='primary' style={{ width: '7rem'}} onClick={() => startEditProfile(profile)}>Edit</Button></Col>
                    <Col><Button variant='danger' style={{ width: '7rem'}} onClick={() => initiateDeleteProfile(profile.id)}>Delete</Button></Col>
                </Row>
            </Card.Footer>
        </Card>
        <hr style={{ width: '9rem'}}/>
    </>

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({initiateDeleteProfile, startEditProfile}, dispatch)
}

export default connect(undefined, mapDispatchToProps)(Profile)