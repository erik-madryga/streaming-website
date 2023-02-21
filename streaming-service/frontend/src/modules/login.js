import {getUsersFailed, initiateGetUsers, initiateGetProfiles} from "./user";
import {initiateGetMovies} from "./movie"

const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'


const initialState = {
    loginPending: false,
    isLoggedIn: false,
    currentUser: undefined
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loginPending: true,
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loginPending: false,
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                loginPending: false,
                currentUser: action.user
            }

        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }

        default:
            return state
    }
}

export function loginRequest() {
    return {type: LOGIN_REQUEST}
}

export function loginFailure() {
    return {type: LOGIN_FAILURE}
}

export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        user
    }
}

export function logout() {
    return {type: LOGOUT}
}


export function initiateLogin(credentials) {
    return function sideEffect(dispatch, getState) {
        dispatch(loginRequest())

        fetch("http://localhost:8080/users/all", {
            method: "GET"
        }).then(response => {
            if (!response.ok)
                return dispatch(getUsersFailed())

            response.json().then(users => {
                for (let i = 0; i < users.length; i++) {
                    if (credentials.username === users[i].username &&
                        credentials.password === users[i].password) {
                        dispatch(loginSuccess(credentials.username))
                        dispatch(initiateGetUsers())
                        dispatch(initiateGetProfiles())
                        dispatch(initiateGetMovies())
                        return
                    } else {
                        dispatch(loginFailure())
                    }
                }
            })
        })
    }
}
