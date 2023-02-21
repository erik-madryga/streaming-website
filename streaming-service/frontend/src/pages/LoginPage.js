import Login from "../components/UserComponents/Login";
import {connect} from "react-redux";
import Home from "./Home";

const LoginPage = ({isLoggedIn}) => {

    if(isLoggedIn){
        return <>
            <Home/>
        </>
    }
    else {
        return <>
            <Login/>
        </>
    }

};

function mapStateToProps(state) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn
    }
}

export default connect(mapStateToProps)(LoginPage)