import Movie from "./Movie";
import {Row, Col} from "react-bootstrap";
import {connect} from "react-redux";

function MovieList({movies, actionAdventure, comedy, drama, kids, fantasy}) {

    //sum(filters)=C(n,0)+C(n,1)+...+C(n,n-1)+C(n,n) where n is the number of genres to choose from

    //C(n,0) filter
    const movieArray = movies.products.map(movie => <Movie key={movie.id} movie={movie}/>)

    //C(n,1) filters
    const actionAdventureFilter = movieArray.filter(products => products.props.movie.genre === 'Action and Adventure')
    const comedyFilter = movieArray.filter(products => products.props.movie.genre === 'Comedy')
    const dramaFilter = movieArray.filter(products => products.props.movie.genre === 'Drama')
    const kidsFilter = movieArray.filter(products => products.props.movie.genre === 'Childrens and Family')
    const fantasyFilter = movieArray.filter(products => products.props.movie.genre === 'Fantasy')

    //C(n,2) filters
    const actionOrComedyFilter = movieArray.filter(products => products.props.movie.genre === 'Action and Adventure' || products.props.movie.genre === 'Comedy')
    const actionOrDramaFilter = movieArray.filter(products => products.props.movie.genre === 'Action and Adventure' || products.props.movie.genre === 'Drama')
    const dramaOrComedyFilter = movieArray.filter(products => products.props.movie.genre === 'Drama' || products.props.movie.genre === 'Comedy')
    const actionOrKidsFilter = movieArray.filter(products => products.props.movie.genre === 'Action and Adventure' || products.props.movie.genre === 'Childrens and Family')
    const kidsOrDramaFilter = movieArray.filter(products => products.props.movie.genre === 'Childrens and Family' || products.props.movie.genre === 'Drama')
    const kidsOrComedyFilter = movieArray.filter(products => products.props.movie.genre === 'Childrens and Family' || products.props.movie.genre === 'Comedy')
    const fantasyOrComedyFilter = movieArray.filter(products => products.props.movie.genre === 'Fantasy' || products.props.movie.genre === 'Comedy')
    const fantasyOrKidsFilter = movieArray.filter(products => products.props.movie.genre === 'Fantasy' || products.props.movie.genre === 'Childrens and Family')
    const fantasyOrDramaFilter = movieArray.filter(products => products.props.movie.genre === 'Fantasy' || products.props.movie.genre === 'Drama')
    const fantasyOrActionFilter = movieArray.filter(products => products.props.movie.genre === 'Fantasy' || products.props.movie.genre === 'Action and Adventure')

    //C(n,3) filters
    const actionOrComedyOrKidsFilter = movieArray.filter(products => products.props.movie.genre === 'Action and Adventure' || products.props.movie.genre === 'Comedy' || products.props.movie.genre === 'Childrens and Family')
    const actionOrDramaOrKidsFilter = movieArray.filter(products => products.props.movie.genre === 'Action and Adventure' || products.props.movie.genre === 'Drama' || products.props.movie.genre === 'Childrens and Family')
    const dramaOrComedyOrActionFilter = movieArray.filter(products => products.props.movie.genre === 'Drama' || products.props.movie.genre === 'Comedy' || products.props.movie.genre === 'Action and Adventure')
    const dramaOrComedyOrKidsFilter = movieArray.filter(products => products.props.movie.genre === 'Drama' || products.props.movie.genre === 'Comedy' || products.props.movie.genre === 'Childrens and Family')
    const fantasyOrComedyOrKidsFilter = movieArray.filter(products => products.props.movie.genre === 'Action and Adventure' || products.props.movie.genre === 'Comedy' || products.props.movie.genre === 'Childrens and Family')
    const fantasyOrDramaOrKidsFilter = movieArray.filter(products => products.props.movie.genre === 'Action and Adventure' || products.props.movie.genre === 'Drama' || products.props.movie.genre === 'Childrens and Family')
    const fantasyOrComedyOrActionFilter = movieArray.filter(products => products.props.movie.genre === 'Drama' || products.props.movie.genre === 'Comedy' || products.props.movie.genre === 'Action and Adventure')
    const dramaOrComedyOrFantasyFilter = movieArray.filter(products => products.props.movie.genre === 'Drama' || products.props.movie.genre === 'Comedy' || products.props.movie.genre === 'Childrens and Family')
    const actionOrFantasyOrKidsFilter = movieArray.filter(products => products.props.movie.genre === 'Action and Adventure' || products.props.movie.genre === 'Comedy' || products.props.movie.genre === 'Childrens and Family')
    const actionOrDramaOrFantasyFilter = movieArray.filter(products => products.props.movie.genre === 'Action and Adventure' || products.props.movie.genre === 'Drama' || products.props.movie.genre === 'Childrens and Family')

    //C(n,4) filters
    const dramaOrComedyOrKidsOrActionFilter = movieArray.filter(products =>
        products.props.movie.genre === 'Drama' || products.props.movie.genre === 'Comedy' ||
        products.props.movie.genre === 'Childrens and Family' || products.props.movie.genre === 'Action and Adventure')
    const actionOrComedyOrKidsOrFantasyFilter = movieArray.filter(
        products => products.props.movie.genre === 'Action and Adventure' || products.props.movie.genre === 'Comedy' ||
            products.props.movie.genre === 'Childrens and Family' || products.props.movie.genre === 'Fantasy')
    const actionOrDramaOrKidsOrFantasyFilter = movieArray.filter(
        products => products.props.movie.genre === 'Action and Adventure' || products.props.movie.genre === 'Drama' ||
            products.props.movie.genre === 'Childrens and Family' || products.props.movie.genre === 'Fantasy')
    const dramaOrComedyOrActionOrFantasyFilter = movieArray.filter(
        products => products.props.movie.genre === 'Drama' || products.props.movie.genre === 'Comedy' ||
            products.props.movie.genre === 'Action and Adventure' || products.props.movie.genre === 'Fantasy')
    const dramaOrComedyOrKidsOrFantasyFilter = movieArray.filter(
        products => products.props.movie.genre === 'Drama' || products.props.movie.genre === 'Comedy' ||
            products.props.movie.genre === 'Childrens and Family' || products.props.movie.genre === 'Fantasy')

    //C(n,5) filters
    const dramaOrComedyOrKidsOrActionOrFantasyFilter = movieArray.filter(products =>
        products.props.movie.genre === 'Drama' || products.props.movie.genre === 'Comedy' ||
        products.props.movie.genre === 'Childrens and Family' || products.props.movie.genre === 'Action and Adventure' || products.props.movie.genre === 'Fantasy')

    //n=5
    //C(n,1) filters
    if (actionAdventure && !comedy && !drama && !kids && !fantasy) return <Row><h4>Action & Adventure</h4>{actionAdventureFilter}</Row>
    else if (!actionAdventure && comedy && !drama && !kids && !fantasy) return <Row><h4>Comedy</h4>{comedyFilter}</Row>
    else if (!actionAdventure && !comedy && drama && !kids && !fantasy) return <Row><h4>Drama</h4>{dramaFilter}</Row>
    else if (!actionAdventure && !comedy && !drama && kids && !fantasy) return <Row><h4>Children & Family</h4>{kidsFilter}</Row>
    else if (!actionAdventure && !comedy && !drama && !kids && fantasy) return <Row><h4></h4>{fantasyFilter}</Row>
    //C(n,2) filters
    else if (actionAdventure && comedy && !drama && !kids && !fantasy) return <Row><h4>Action & Adventure, and Comedy</h4>{actionOrComedyFilter}</Row>
    else if (actionAdventure && !comedy && drama && !kids && !fantasy) return <Row><h4>Action & Adventure, and Drama</h4>{actionOrDramaFilter}</Row>
    else if (!actionAdventure && comedy && drama && !kids && !fantasy) return <Row><h4>Comedy, and Drama</h4>{dramaOrComedyFilter}</Row>
    else if (actionAdventure && !comedy && !drama && kids && !fantasy) return <Row><h4>Action & Adventure, and Children & Family</h4>{actionOrKidsFilter}</Row>
    else if (actionAdventure && !comedy && !drama && kids && !fantasy) return <Row><h4>Children & Family, Drama</h4>{kidsOrDramaFilter}</Row>
    else if (!actionAdventure && comedy && !drama && kids && !fantasy) return <Row><h4>Children & Family, and Comedy</h4>{kidsOrComedyFilter}</Row>
    else if (!actionAdventure && comedy && !drama && !kids && fantasy) return <Row><h4>Comedy and Fantasy</h4>{fantasyOrComedyFilter}</Row>
    else if (!actionAdventure && !comedy && !drama && kids && fantasy) return <Row><h4>Children & Family, and Fantasy</h4>{fantasyOrKidsFilter}</Row>
    else if (!actionAdventure && !comedy && drama && !kids && fantasy) return <Row><h4>Drama and Fantasy</h4>{fantasyOrDramaFilter}</Row>
    else if (actionAdventure && !comedy && !drama && !kids && fantasy) return <Row><h4>Action & Adventure, and Fantasy</h4>{fantasyOrActionFilter}</Row>
    //C(n,3) filters
    else if (actionAdventure && comedy && !drama && kids && !fantasy) return <Row><h4>Action & Adventure, Children & Family, and Comedy</h4>{actionOrComedyOrKidsFilter}</Row>
    else if (actionAdventure && !comedy && drama && kids && !fantasy) return <Row><h4>Action & Adventure, Children & Family, and Drama</h4>{actionOrDramaOrKidsFilter}</Row>
    else if (actionAdventure && comedy && drama && !kids && !fantasy) return <Row><h4>Action & Adventure, Comedy, and Drama</h4>{dramaOrComedyOrActionFilter}</Row>
    else if (!actionAdventure && comedy && drama && kids && !fantasy) return <Row><h4>Children & Family, Comedy, and Drama</h4>{dramaOrComedyOrKidsFilter}</Row>
    else if (!actionAdventure && !comedy && drama && kids && fantasy) return <Row><h4>Children & Family, Drama, and Fantasy</h4>{fantasyOrDramaOrKidsFilter}</Row>
    else if (actionAdventure && comedy && !drama && !kids && fantasy) return <Row><h4>Action & Adventure, Comedy, and Fantasy</h4>{fantasyOrComedyOrActionFilter}</Row>
    else if (!actionAdventure && comedy && drama && !kids && fantasy) return <Row><h4>Comedy, Drama, and Fantasy</h4>{dramaOrComedyOrFantasyFilter}</Row>
    else if (actionAdventure && !comedy && !drama && kids && fantasy) return <Row><h4>Action & Adventure, Children & Family, and Fantasy</h4>{actionOrFantasyOrKidsFilter}</Row>
    else if (actionAdventure && !comedy && drama && !kids && fantasy) return <Row><h4>Action & Adventure, Drama, and Fantasy</h4>{actionOrDramaOrFantasyFilter}</Row>
    else if (!actionAdventure && comedy && !drama && kids && fantasy) return <Row><h4>Children & Family, Comedy, and Fantasy</h4>{fantasyOrComedyOrKidsFilter}</Row>
    //C(n,4) filters
    else if (actionAdventure && comedy && drama && kids && !fantasy) return <Row><h4>Action & Adventure, Children & Family, Comedy, and Drama</h4>{dramaOrComedyOrKidsOrActionFilter}</Row>
    else if (actionAdventure && comedy && drama && !kids && fantasy) return <Row><h4>Action & Adventure, Children & Family, Comedy, and Fantasy</h4>{actionOrComedyOrKidsOrFantasyFilter}</Row>
    else if (actionAdventure && comedy && !drama && kids && fantasy) return <Row><h4>Action & Adventure, Children & Family, Drama, and Fantasy</h4>{actionOrDramaOrKidsOrFantasyFilter}</Row>
    else if (actionAdventure && !comedy && drama && kids && fantasy) return <Row><h4>Action & Adventure, Comedy, Drama, and Fantasy</h4>{dramaOrComedyOrActionOrFantasyFilter}</Row>
    else if (!actionAdventure && comedy && drama && kids && fantasy) return <Row><h4>Children & Family, Comedy, Drama, and Fantasy</h4>{dramaOrComedyOrKidsOrFantasyFilter}</Row>
    //C(n,5) filters
    else if (actionAdventure && comedy && drama && kids && fantasy) return <Row><h4>Action & Adventure, Children & Family, Comedy, Drama, and Fantasy</h4>{dramaOrComedyOrKidsOrActionOrFantasyFilter}</Row>
    //C(n,0) filter
    else return <Row>{movieArray}</Row>
}

function mapStateToProps(state) {
    return {
        movies: state.movieReducer.movies
    }
}

export default connect(mapStateToProps)(MovieList)