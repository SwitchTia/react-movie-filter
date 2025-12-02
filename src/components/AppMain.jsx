import { moviesList } from "../assets/moviesList";

function AppMain() {

    // const moviesListWithId = [];

    // moviesList.forEach((movie, index) => {
    //     moviesListWithId.push({
    //         ...movie,
    //         id: index + 1,
    //     });
    // });

    // moviesList = moviesListWithId;
    // console.log(moviesList);
    return (
        <>
            <main>
                <div className='container'>
                    <h1 className="py-20">Movies List</h1>
                    <ul>
                        {moviesList.map((movie) => (
                            <li className="py-10" key={movie.id}>
                                <h3>Title : {movie.title}</h3>
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