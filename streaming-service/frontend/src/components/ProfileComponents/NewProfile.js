import {Button, Form, Modal} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {initiateAddProfile} from "../../modules/user";
import {connect} from "react-redux";


function NewProfile({showNewProfile, setShowNewProfile, initiateAddProfile}) {
    function handleClose() {
        setShowNewProfile(false)
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleClose()
        const profileName = document.getElementById('profileName').value
        const profileAge = document.getElementById('profileAge').value
        const profilePronouns = document.getElementById('profilePronouns').value
        const profileColor = document.getElementById('profileColor').value
        const profilePicture = document.getElementById('profilePicture').value

        const newProfile = {
            profileName,
            profileAge,
            profilePronouns,
            profileColor,
            profilePicture
        }

        initiateAddProfile(newProfile)
    }

    return <Modal show={showNewProfile} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Create New Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Profile Name:</Form.Label>
                    <Form.Control type="profileName" placeholder="Profile Name" id='profileName'/>
                    <Form.Label>Profile Age:</Form.Label>
                    <Form.Control type="int" placeholder="Profile Age" id='profileAge'/>
                    <Form.Label>Profile Pronouns:</Form.Label>
                    <Form.Control type="profilePronouns" placeholder="Profile Pronouns" id='profilePronouns'/>
                    <Form.Label>Profile Color:</Form.Label>
                    <Form.Control type="color" placeholder="Profile Color" id='profileColor'/>
                    <Form.Label>Profile Picture:</Form.Label>
                    <Form.Control type="img" placeholder="Profile Picture" id='profilePicture'/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </Modal.Body>
    </Modal>
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({initiateAddProfile}, dispatch)
}

export default connect(undefined, mapDispatchToProps)(NewProfile)
