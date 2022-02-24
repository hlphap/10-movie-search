import axios from "axios";
import { createContext, useState } from "react";
import NestedToString from "../helpers/NestedToString";
import numeral from "numeral";

export const MovieContext = createContext();

function MovieContextProvide({ children }) {
    const getMovie = function (movieID) {
        let newData = {};
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${movieID}?&api_key=cfe422613b250f702980a3bbf9e90716`
            )
            .then((response) => {
                const data = response.data;
                newData = {
                    ...data,
                    posterIMG: data.poster_path
                        ? "https://image.tmdb.org/t/p/w500" + data.poster_path
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g",
                    productionList: NestedToString(data.production_companies),
                    genresList: NestedToString(data.genres),
                    vote: data.vote ? data.vote + "/10" : "-",
                    totalRevenue: numeral(data.revenue).format("($0,0)"),
                };
                setData(newData);
            })
            .catch((e) => {
                alert(`Error`, e);
            });

        return newData;
    };

    const getMovies = function (search) {
        if (search == "") return [];
        return axios
            .get(
                `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=cfe422613b250f702980a3bbf9e90716`
            )
            .then((response) => {
                return response.data;
            })
            .catch((e) => {
                console.log(`Error ${e}`);
            });
    };

    const [data, setData] = useState(() => getMovie("123"));

    return (
        <MovieContext.Provider value={{ data, getMovie, getMovies }}>
            {children}
        </MovieContext.Provider>
    );
}

export default MovieContextProvide;
