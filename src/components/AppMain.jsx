import { useState } from "react";
import { moviesList } from "../assets/moviesList";

function AppMain() {

    const [search, setSearch] = useState("");

    const moviesListWithId = moviesList.map((movie, index) => ({
        ...movie,
        id: index + 1,
    }));


    return (
        <>
            <main>
                <div>
                    <input 
                    type="search"
                    className="mx-10"
                    placeholder="Search your movie here"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                     />
                </div>
                <div className='container'>

                    <h1 >Movies List</h1>
                    <section>
                        {moviesListWithId.map((movie) => (
                            <div className="card py-10" key={movie.id}>
                                <h3>Title : {movie.title}</h3>
                                <p>Id : {movie.id}</p>
                                <p>Genre : {movie.genre}</p>

                            </div>
                        ))}
                    </section>
                </div>
            </main>
        </>
    )
}

export default AppMain;