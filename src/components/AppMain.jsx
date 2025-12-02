import { moviesList } from "../assets/moviesList";

function AppMain() {

    const moviesListWithId = moviesList.map((movie, index) => ({
        ...movie,
        id: index + 1,
    }));


    return (
        <>
            <main>
                <div className='container'>
                    <h1 className="py-20">Movies List</h1>
                    <ul>
                        {moviesListWithId.map((movie) => (
                            <li className="py-10" key={movie.id}>
                                <h3>Title : {movie.title}</h3>
                                <p>Id : {movie.id}</p>
                                <p>Genre : {movie.genre}</p>

                            </li>
                        ))}
                    </ul>



                </div>
            </main>
        </>
    )
}

export default AppMain;