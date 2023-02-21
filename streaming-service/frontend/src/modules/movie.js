const GETTING_MOVIES ='GETTING_MOVIES'
const GET_MOVIES_FAILED ='GET_MOVIES_FAILED'
const MOVIES_UPDATED ='MOVIES_UPDATED'

const initialState = {
    movies: [],
    currentMovie: undefined,
    gettingMovies: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GETTING_MOVIES:
            return {
                ...state,
                gettingMovies: true
            }

        case GET_MOVIES_FAILED:
            return {
                ...state,
                gettingMovies: false
            }

        case MOVIES_UPDATED:
            return {
                ...state,
                movies: action.movies,
            }

        default:
            return state
    }
}

//Side Effects
function gettingMovie() {
    return {
        type: GETTING_MOVIES
    }
}

export function getMoviesFailed() {
    return {
        type: GET_MOVIES_FAILED
    }
}

function moviesUpdated(movies) {
    return {
        type: MOVIES_UPDATED,
        movies
    }
}

export function initiateGetMovies() {
    return function sideEffect(dispatch, getState) {
        dispatch(gettingMovie())

        fetch("http://localhost:8080/api", {
            method: "GET"
        }).then(response => {
            if (!response.ok)
                return dispatch(getMoviesFailed())

            response.json().then(movies => {
                dispatch(moviesUpdated(movies))
            })
        }).catch(error => console.log(error))
    }
}

