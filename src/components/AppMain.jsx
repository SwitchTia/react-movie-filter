import { useEffect, useState } from "react";
import { moviesList } from "../assets/moviesList";

function AppMain() {

    const moviesListWithId = moviesList.map((movie, index) => ({
        ...movie,
        id: index + 1,
    }));


    const [search, setSearch] = useState("");
    const [filteredMovieList, setFilteredMovieList] = useState(moviesListWithId);
    const [newMovie, setNewMovie] = useState("");

    useEffect(() => {
        const newArray = moviesListWithId.filter((movie) =>
            movie.genre.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredMovieList(newArray);
    }, [search]);

    function createNewMovie(event) {
        event.preventDefault();
        const newMovie = {
            id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
            title: newMovie,
        };
        setPosts((current) => [...current, nuovoPost]);
        setNewPost("");
    }

    return (
        <>
            <main>

                <div className='container'>
                    <div className="flex py-20">
                        <span class="mx-10">
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.242 1.656a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
                            </svg>
                        </span>

                        <input
                            type="search"
                            placeholder="Search your genre here"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </div>

                    <section>
                        <h2 >Movies List</h2>
                        {filteredMovieList.map((movie) => (
                            <div className="card py-20" key={movie.id}>
                                <h3>Title : {movie.title}</h3>
                                {/* <p>Id : {movie.id}</p> */}
                                <p>Genre : {movie.genre}</p>

                            </div>
                        ))}
                    </section>

                    <section>
                        <h3 className="py-20">Add your movie here</h3>
                        <form onSubmit={createNewMovie} action="">
                            <label className="mx-10" htmlFor="">
                                Title
                            </label>
                            <input
                                value={newMovie}
                                onChange={(event) => setNewMovie(event.target.value)}
                                placeholder="Write your movie here"
                                type="text"
                            />

                            <button type="submit" className="btn ">
                                Add movie
                            </button>
                        </form>
                    </section>
                </div>
            </main>
        </>
    )
}

export default AppMain;