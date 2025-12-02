import { useEffect, useState } from "react";
import { moviesList } from "../assets/moviesList";

function AppMain() {

    const [search, setSearch] = useState("");
    // const [filteredMovieList, setFilteredMovieList] = useState(initialMovie);

    const moviesListWithId = moviesList.map((movie, index) => ({
        ...movie,
        id: index + 1,
    }));

    // useEffect(() => {
    //     const newArray = filteredMovieList.filter((movie) => movie.includes(search));
    //     setFilteredMovieList(newArray);
    // }, [search]);

    return (
        <>
            <main>

                <div className='container'>
                    <div className="py-20">
                        <input
                            type="search"
                            placeholder="Search your movie here"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </div>
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