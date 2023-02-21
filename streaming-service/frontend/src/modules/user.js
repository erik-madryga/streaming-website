//User Actions
const ADDING_USER ='ADDING_USER'
const ADD_USER_FAILED ='ADD_USER_FAILED'
const DELETING_USER ='DELETING_USER'
const DELETE_USER_FAILED ='DELETING_USER_FAILED'
const EDITING_USER ='EDITING_USER'
const EDIT_USER_FAILED ='EDITING_USER_FAILED'
const GETTING_USERS ='GETTING_USER'
const GET_USERS_FAILED ='GETTING_USER_FAILED'
const USERS_UPDATED ='USERS_UPDATED'
const START_EDIT_USER = 'START_EDIT_USER'
const START_CREATE_USER = 'START_CREATE_USER'
const CANCEL_CREATE_EDIT_USER = 'CANCEL_CREATE_EDIT_USER'
const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
const UPDATE_USER_PASSWORD = 'UPDATE_USER_PASSWORD'
const UPDATE_USER_EMAIL = 'UPDATE_USER_EMAIL'
const UPDATE_USER_BDAY = 'UPDATE_USER_BDAY'

//Profile Actions
const ADDING_PROFILE ='ADDING_PROFILE'
const ADD_PROFILE_FAILED ='ADD_PROFILE_FAILED'
const DELETING_PROFILE ='DELETING_PROFILE'
const DELETE_PROFILE_FAILED ='DELETE_PROFILE_FAILED'
const EDITING_PROFILE ='EDITING_PROFILE'
const EDIT_PROFILE_FAILED ='EDIT_PROFILE_FAILED'
const GETTING_PROFILES ='GETTING_PROFILES'
const GET_PROFILES_FAILED ='GET_PROFILES_FAILED'
const PROFILES_UPDATED ='PROFILES_UPDATED'
const START_EDIT_PROFILE = 'START_EDIT_PROFILE'
const START_CREATE_PROFILE = 'START_CREATE_PROFILE'
const CANCEL_CREATE_EDIT_PROFILE = 'CANCEL_CREATE_EDIT_PROFILE'
const UPDATE_PROFILE_NAME = 'UPDATE_PROFILE_NAME'
const UPDATE_PROFILE_AGE = 'UPDATE_PROFILE_AGE'
const UPDATE_PROFILE_PRONOUNS = 'UPDATE_PROFILE_PRONOUNS'
const UPDATE_PROFILE_COLOR = 'UPDATE_PROFILE_COLOR'
const UPDATE_PROFILE_PICTURE = 'UPDATE_PROFILE_PICTURE'


//Reducer

const initialState = {
    users: [],
    username: '',
    password: '',
    email: '',
    bDay: '',
    firstName: '',
    lastName: '',
    userToEdit: undefined,
    currentUser: undefined,
    showEditUser: false,
    gettingUsers: false,
    addingUser: false,

    profiles: [],
    profileName: '',
    profileAge: '',
    profilePronouns: '',
    profileColor: '',
    profilePicture: '',
    profileToEdit: undefined,
    currentprofile: undefined,
    showEditProfile: false,
    gettingProfiles: false,
    addingProfile: false
}



export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADDING_USER:
            return {
                ...state,
                showEditUser: false,
                addingUser: true
            }

        case ADDING_PROFILE:
            return {
                ...state,
                showEditProfile: false,
                addingProfile: true
            }

        case START_CREATE_USER:
            return {
                ...state,
                showEditUser: true,
                userToEdit: undefined,
            }

        case START_CREATE_PROFILE:
            return {
                ...state,
                showEditProfile: true,
                profileToEdit: undefined,
            }

        case START_EDIT_USER:
            return {
                ...state,
                showEditUser: true,
                userToEdit: action.user,
                username: action.user.username,
                password: action.user.password,
                email: action.user.email,
                bDay: action.user.bDay,

            }

        case START_EDIT_PROFILE:
            return {
                ...state,
                showEditProfile: true,
                profileToEdit: action.profile,
                profileName: action.profile.profileName,
                profileAge: action.profile.profileAge,
                profilePronouns: action.profile.profilePronouns,
                profileColor: action.profile.profileColor,
                profilePicture: action.profile.profilePicture
            }

        case CANCEL_CREATE_EDIT_USER:
            return {
                ...state,
                showEditUser: false
            }

        case CANCEL_CREATE_EDIT_PROFILE:
            return {
                ...state,
                showEditProfile: false
            }

        case UPDATE_USER_NAME:
            return {
                ...state,
                username: action.username
            }

        case UPDATE_USER_PASSWORD:
            return {
                ...state,
                password: action.password
            }

        case UPDATE_USER_EMAIL:
            return {
                ...state,
                email: action.email
            }

        case UPDATE_USER_BDAY:
            return {
                ...state,
                bDay: action.bDay
            }

        case UPDATE_PROFILE_NAME:
            return {
                ...state,
                profileName: action.profileName
            }

        case UPDATE_PROFILE_AGE:
            return {
                ...state,
                profileAge: action.profileAge
            }

        case UPDATE_PROFILE_PRONOUNS:
            return {
                ...state,
                profilePronouns: action.profilePronouns
            }

        case UPDATE_PROFILE_COLOR:
            return {
                ...state,
                profileColor: action.profileColor
            }

        case UPDATE_PROFILE_PICTURE:
            return {
                ...state,
                profilePicture: action.profilePicture
            }

        case GETTING_USERS:
            return {
                ...state,
                gettingUsers: true
            }

        case GETTING_PROFILES:
            return {
                ...state,
                gettingProfiles: true
            }

        case GET_USERS_FAILED:
            return {
                ...state,
                gettingUsers: false
            }

        case GET_PROFILES_FAILED:
            return {
                ...state,
                gettingProfiles: false
            }

        case USERS_UPDATED:
            return {
                ...state,
                users: action.users,
                addingUser: false,
                showEditUser: false
            }

        case PROFILES_UPDATED:
            return {
                ...state,
                profiles: action.profiles,
                addingProfile: false,
                showEditProfile: false
            }

        default:
            return state
    }
}

//Action Creators
export function startCreateUser() {
    return {
        type: START_CREATE_USER
    }
}

export function startCreateProfile() {
    return {
        type: START_CREATE_PROFILE
    }
}

export function startEditUser(user) {
    return {
        type: START_EDIT_USER,
        user
    }
}

export function startEditProfile(profile) {
    return {
        type: START_EDIT_PROFILE,
        profile
    }
}

export function cancelCreateEditUser() {
    return {
        type: CANCEL_CREATE_EDIT_USER
    }
}

export function cancelCreateEditProfile() {
    return {
        type: CANCEL_CREATE_EDIT_PROFILE
    }
}

export function updateUsername(username) {
    return{
        type: UPDATE_USER_NAME,
        username
    }
}

export function updatePassword(password) {
    return{
        type: UPDATE_USER_PASSWORD,
        password
    }
}

export function updateEmail(email) {
    return{
        type: UPDATE_USER_EMAIL,
        email
    }
}

export function updateBday(bDay) {
    return{
        type: UPDATE_USER_BDAY,
        bDay
    }
}

export function updateProfileName(profileName) {
    return{
        type: UPDATE_PROFILE_NAME,
        profileName
    }
}

export function updateProfileAge(profileAge) {
    return{
        type: UPDATE_PROFILE_AGE,
        profileAge
    }
}

export function updateProfilePronouns(profilePronouns) {
    return{
        type: UPDATE_PROFILE_PRONOUNS,
        profilePronouns
    }
}

export function updateProfileColor(profileColor) {
    return{
        type: UPDATE_PROFILE_COLOR,
        profileColor
    }
}

export function updateProfilePicture(profilePicture) {
    return{
        type: UPDATE_PROFILE_PICTURE,
        profilePicture
    }
}
//Side Effects
export function addingUser() {
    return {
        type: ADDING_USER
    }
}

export function addingProfile() {
    return {
        type: ADDING_PROFILE
    }
}

function addUserFailed() {
    return {
        type: ADD_USER_FAILED
    }
}

function addProfileFailed() {
    return {
        type: ADD_PROFILE_FAILED
    }
}

export function deletingUser(id) {
    return {
        type: DELETING_USER,
        id
    }
}

export function deletingProfile(id) {
    return {
        type: DELETING_PROFILE,
        id
    }
}

function deleteUserFailed() {
    return {
        type: DELETE_USER_FAILED
    }
}

function deleteProfileFailed() {
    return {
        type: DELETE_PROFILE_FAILED
    }
}

function editingUser() {
    return {
        type: EDITING_USER
    }
}

function editingProfile() {
    return {
        type: EDITING_PROFILE
    }
}

function editUserFailed() {
    return {
        type: EDIT_USER_FAILED
    }
}

function editProfileFailed() {
    return {
        type: EDIT_PROFILE_FAILED
    }
}

function gettingUser() {
    return {
        type: GETTING_USERS
    }
}

function gettingProfile() {
    return {
        type: GETTING_PROFILES
    }
}

export function getUsersFailed() {
    return {
        type: GET_USERS_FAILED
    }
}

export function getProfilesFailed() {
    return {
        type: GET_PROFILES_FAILED
    }
}

function usersUpdated(users) {
    return {
        type: USERS_UPDATED,
        users
    }
}

function profilesUpdated(profiles) {
    return {
        type: PROFILES_UPDATED,
        profiles
    }
}

export function initiateGetUsers() {
    return function sideEffect(dispatch, getState) {
        dispatch(gettingUser())

        fetch("http://localhost:8080/users/all", {
            method: "GET"
        }).then(response => {
            if (!response.ok)
                return dispatch(getUsersFailed())

            response.json().then(users => {
                dispatch(usersUpdated(users))
            })
        }).catch(error => console.log(error))
    }
}

export function initiateGetProfiles() {
    return function sideEffect(dispatch, getState) {
        dispatch(gettingProfile())

        fetch("http://localhost:8080/profiles/all", {
            method: "GET"
        }).then(response => {
            if (!response.ok)
                return dispatch(getProfilesFailed())

            response.json().then(profiles => {
                dispatch(profilesUpdated(profiles))
            })
        }).catch(error => console.log(error))
    }
}

export function initiateAddUser(user) {
    return function sideEffect(dispatch, getState) {
        dispatch(addingUser())

        fetch("http://localhost:8080/users/add", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => {
            if (!response.ok)
                return dispatch(addUserFailed())

            response.text().then(text => {
                if (text === '🐺') {
                    dispatch(initiateGetUsers())
                    alert('Registration Successful')
                } else
                    dispatch(addUserFailed())
            })
        }).catch(error => console.log(error))
    }
}

export function initiateAddProfile(profile) {
    return function sideEffect(dispatch, getState) {
        dispatch(addingProfile())

        fetch("http://localhost:8080/profiles/add", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profile)
        }).then(response => {
            if (!response.ok)
                return dispatch(addProfileFailed())

            response.text().then(text => {
                if (text === '🐺') {
                    dispatch(initiateGetProfiles())
                    alert('Registration Successful')
                } else
                    dispatch(addProfileFailed())
            })
        }).catch(error => console.log(error))
    }
}

export function initiateEditUser(user) {
    return function sideEffect(dispatch, getState) {
        dispatch(editingUser())

        fetch("http://localhost:8080/users/edit", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => {
            if (!response.ok)
                return dispatch(editUserFailed())

            response.text().then(text => {
                if (text === '🐺')
                    dispatch(initiateGetUsers())
                else
                    dispatch(editUserFailed())
            })
        }).catch(error => console.log(error))
    }
}

export function initiateEditProfile(profile) {
    return function sideEffect(dispatch, getState) {
        dispatch(editingProfile())

        fetch("http://localhost:8080/profiles/edit", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profile)
        }).then(response => {
            if (!response.ok)
                return dispatch(editProfileFailed())

            response.text().then(text => {
                if (text === '🐺')
                    dispatch(initiateGetProfiles())
                else
                    dispatch(editProfileFailed())
            })
        }).catch(error => console.log(error))
    }
}

export function initiateDeleteUser(userId) {
    return function sideEffect(dispatch, getState) {
        dispatch(deletingUser())

        fetch(`http://localhost:8080/users/${userId}`, {
            method: "DELETE"
        }).then(response => {
            if (!response.ok)
                return dispatch(deleteUserFailed())

            response.text().then(text => {
                if (text === '🐺')
                    dispatch(initiateGetUsers())
                else
                    dispatch(deleteUserFailed())
            })
        }).catch(error => console.log(error))
    }
}

export function initiateDeleteProfile(profileId) {
    return function sideEffect(dispatch, getState) {
        dispatch(deletingProfile())

        fetch(`http://localhost:8080/profiles/${profileId}`, {
            method: "DELETE"
        }).then(response => {
            if (!response.ok)
                return dispatch(deleteProfileFailed())

            response.text().then(text => {
                if (text === '🐺')
                    dispatch(initiateGetProfiles())
                else
                    dispatch(deleteProfileFailed())
            })
        }).catch(error => console.log(error))
    }
}