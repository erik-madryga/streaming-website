import {Container, Form, Col, Button, ToggleButton, ButtonGroup, Row, Dropdown, DropdownButton} from "react-bootstrap"
import {deletingMovie, addingMovie} from "../modules/movie";
import {connect} from "react-redux"
import MovieList from "../components/MovieComponents/MovieList";
import {useState} from "react"

function MoviesPage({movies, dispatch}) {
    //state
    const [actionAdventure, setActionAdventure] = useState(false)
    const [comedy, setComedy] = useState(false)
    const [drama, setDrama] = useState(false)
    const [kids, setKids] = useState(false)
    const [fantasy, setFantasy] = useState(false)

    //handlers
    //kids
    const handleApplyKidsFilter = () => setKids(true)
    const handleDisableKidsFilter = () => setKids(false)
    //action&adventure
    const handleApplyAdventureFilter = () => setActionAdventure(true)
    const handleDisableAdventureFilter = () => setActionAdventure(false)
    //comedy
    const handleApplyComedyFilter = () => setComedy(true)
    const handleDisableComedyFilter = () => setComedy(false)
    //drama
    const handleApplyDramaFilter = () => setDrama(true)
    const handleDisableDramaFilter = () => setDrama(false)
    //fantasy
    const handleApplyFantasyFilter = () => setFantasy(true)
    const handleDisableFantasyFilter = () => setFantasy(false)

    //rendering
    return <>
        <h1>Movies</h1>
        <p>Welcome to the Movie Page. Here displays a list of movies.
            <br/>
            You may filter the movies below by clicking one of the genre buttons.</p>
        <Row>
            <Dropdown as={ButtonGroup} style={{width: '21.5rem'}}>
                <Dropdown.Toggle split variant='primary' >Movie Suggestions</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={handleApplyAdventureFilter}>{actionAdventure ? "Apply Action and Adventure Filter (ON)" : "Apply Action and Adventure Filter (OFF)"}</Dropdown.Item>
                    <Dropdown.Item onClick={handleDisableAdventureFilter}>Disable Action & Adventure Filter</Dropdown.Item>
                    <Dropdown.Divider style={{width: '90%', margin:'auto'}}/>
                    <Dropdown.Item onClick={handleApplyKidsFilter}>{kids ? "Apply Children & Family Filter (ON)" : "Apply Children & Family Filter (OFF)"}</Dropdown.Item>
                    <Dropdown.Item onClick={handleDisableKidsFilter}>Disable Children and Family Filter</Dropdown.Item>
                    <Dropdown.Divider style={{width: '90%', margin:'auto'}}/>
                    <Dropdown.Item onClick={handleApplyComedyFilter}>{comedy ? "Apply Comedy Filter (ON)" : "Apply Comedy Filter (OFF)"}</Dropdown.Item>
                    <Dropdown.Item onClick={handleDisableComedyFilter}>Disable Comedy Filter</Dropdown.Item>
                    <Dropdown.Divider style={{width: '90%', margin:'auto'}}/>
                    <Dropdown.Item onClick={handleApplyDramaFilter}>{drama ? "Apply Drama Filter (ON)" : "Apply Drama Filter (OFF)"}</Dropdown.Item>
                    <Dropdown.Item onClick={handleDisableDramaFilter}>Disable Drama Filter</Dropdown.Item>
                    <Dropdown.Divider style={{width: '90%', margin:'auto'}}/>
                    <Dropdown.Item onClick={handleApplyFantasyFilter}>{fantasy ? "Apply Fantasy Filter (ON)" : "Apply Fantasy Filter (OFF)"}</Dropdown.Item>
                    <Dropdown.Item onClick={handleDisableFantasyFilter}>Disable Fantasy Filter</Dropdown.Item>
                </Dropdown.Menu><br/>
            </Dropdown>
        </Row>
        <hr/>

        <Container fluid>
            <MovieList movies={movies} actionAdventure={actionAdventure} comedy={comedy} drama={drama} kids={kids} fantasy={fantasy}/>
        </Container>
    </>
}

function mapStateToProps(state) {
    return {
        movies: state.movieReducer.movies
    }
}

export default connect(mapStateToProps)(MoviesPage)