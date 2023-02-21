import {Button} from "react-bootstrap";
import {logout} from "../../modules/login"


function LogoutBtn({logout}){

    function logout(){
        window.location.reload(false);
    }

    return <Button onClick={logout} variant="light" id="logout-button"> Logout</Button>
}

export default LogoutBtn;