import UserRouter from './router/UserRouter'
import ProfileRouter from './router/ProfileRouter'
import MovieRouter from './router/MovieRouter'
import GuestRouter from './router/GuestRouter'
import "./styles/app.css"


function App() {

    return (
                <>
                    {<MovieRouter/>}
                </>
    )
}

export default App
