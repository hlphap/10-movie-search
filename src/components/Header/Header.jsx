import "./Header.css";
import { MovieContext } from "../../context/MovieContext";
import { useContext, useEffect, useState } from "react";
const Logo = "./img/tmdb.svg";

function Header({ handleSetMovie }) {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState();
    const [movies, setMovies] = useState([]);
    const { getMovie, getMovies } = useContext(MovieContext);

    useEffect(() => {
        if (selected) getMovie(selected);
    }, [selected]);

    useEffect(() => {
        if (search && /[\d\w]/.test(search)) {
            getMovies(search).then((res) => {
                setMovies(res);
            });
        }
    }, [getMovies, search]);

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    };

    const handleOnClick = (e) => {
        setSelected(e.target.getAttribute("data-key"));
        setSearch("");
    };

    return (
        <div className="header">
            <img src={Logo} alt="Logo" className="header__img" />
            <div className="header__search">
                <div className="header__input-wrap">
                    <input
                        type="text"
                        className="header__input"
                        placeholder="Search Movie Title..."
                        value={search}
                        onChange={handleOnChange}
                    />
                    <ul
                        className="header__suggestion"
                        style={
                            /[\d\w]/.test(search)
                                ? { display: "block" }
                                : { display: "none" }
                        }
                    >
                        {movies &&
                            movies.results &&
                            movies.results.map((movie) => (
                                <li
                                    key={movie.id}
                                    data-key={movie.id}
                                    onClick={handleOnClick}
                                    className="header__suggestion-item"
                                >
                                    {movie.title}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
