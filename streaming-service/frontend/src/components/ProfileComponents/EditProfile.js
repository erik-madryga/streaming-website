import {Button, Form, Modal} from "react-bootstrap"
import {bindActionCreators} from "redux"
import {
    initiateEditProfile,
    cancelCreateEditProfile,
    updateProfileAge, updateProfileColor, updateProfileName, updateProfilePronouns, updateProfilePicture
} from "../../modules/user"
import {connect} from "react-redux"

function EditProfile({show, profileToEdit,
                       profileName, profileAge, profilePronouns, profileColor, profilePicture,
                       initiateEditProfile, cancelCreateEditProfile,
                       updateProfileAge, updateProfileColor, updateProfileName, updateProfilePronouns, updateProfilePicture}) {

    function handleSubmit(event) {
        event.preventDefault()

        initiateEditProfile({...profileToEdit,
            profileName, profileAge, profilePronouns, profileColor, profilePicture})

    }

    return <Modal show={show} onHide={cancelCreateEditProfile}>
        <Form onSubmit={handleSubmit}>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="profileName" value={profileName}
                          onChange={event => updateProfileName(event.target.value)}/>
            <Form.Label>Age:</Form.Label>
            <Form.Control type="int" value={profileAge}
                          onChange={event => updateProfileAge(event.target.value)}/>
            <Form.Label>Pronouns:</Form.Label>
            <Form.Control type="profilePronouns" value={profilePronouns}
                          onChange={event => updateProfilePronouns(event.target.value)}/>
            <Form.Label>Color:</Form.Label>
            <Form.Control type="color" value={profileColor}
                          onChange={event => updateProfileColor(event.target.value)}/>
            <Form.Label>Picture:</Form.Label>
            <Form.Control type="img" value={profilePicture}
                          onChange={event => updateProfilePicture(event.target.value)}/>
            <Button type='submit'>Apply</Button>
        </Form>
    </Modal>
}

function mapStateToProps(state) {
    return {
        show: state.userReducer.showEditProfile,
        profileToEdit: state.userReducer.profileToEdit,
        profileName: state.userReducer.profileName,
        profileAge: state.userReducer.profileAge,
        profilePronouns: state.userReducer.profilePronouns,
        profileColor: state.userReducer.profileColor,
        profilePicture: state.userReducer.profilePicture
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({initiateEditProfile,
        cancelCreateEditProfile,
        updateProfileAge, updateProfileColor, updateProfileName, updateProfilePronouns, updateProfilePicture}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)