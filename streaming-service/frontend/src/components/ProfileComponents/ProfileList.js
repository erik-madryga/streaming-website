import Profile from "./Profile";
import {Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import EditProfile from "./EditProfile";

function ProfileList({profiles, deleteProfile}) {

    const profileArray = profiles.map(profile => <Col><Profile key={profile.id} profile={profile} delete={deleteProfile}/></Col>)

    return <>
        <EditProfile/>
        <Row>
            {profileArray}
        </Row>
    </>
}

function mapStateToProps(state) {
    return {
        profiles: state.userReducer.profiles
    }
}

export default connect(mapStateToProps)(ProfileList)