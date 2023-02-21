import {Container, Form, Col, Button, Row, ButtonGroup} from "react-bootstrap"
import {deletingProfile, addingProfile} from "../modules/user";
import {connect} from "react-redux"
import ProfileList from "../components/ProfileComponents/ProfileList";
import {useState} from "react"
import NewProfile from "../components/ProfileComponents/NewProfile"

function ProfilesPage({profiles, dispatch}) {

    function handleDeleteProfile(id) {
        dispatch(deletingProfile(id))
    }

    function handleCreateProfile(profile) {
        dispatch(addingProfile(profile))
    }

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(true)
    }

    return <>
        <h1>Profiles</h1>
        <p>Welcome to the Profile Page. Here displays a list of profiles.</p>
        <Container fluid>
            <Form>
                    <NewProfile showNewProfile={show} setShowNewProfile={setShow} handleAddProfile={handleCreateProfile}/>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <ButtonGroup>
                            <Col><Button onClick={handleShow}>New Profile</Button></Col>
                        </ButtonGroup>
                    </Form.Group>
            </Form>
            <hr/>
            <Row>
                <ProfileList profiles={profiles} deleteProfile={handleDeleteProfile}/>
            </Row>
        </Container>
    </>
}

function mapStateToProps(state) {
    return{
        profiles: state.userReducer.profiles
    }
}

export default connect(mapStateToProps)(ProfilesPage)