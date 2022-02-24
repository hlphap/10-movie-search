import "./App.css";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import { useContext } from "react";
import { MovieContext } from "./context/MovieContext";

function App() {
    const { data } = useContext(MovieContext);

    console.log("https://image.tmdb.org/t/p/original" + data.backdrop_path);

    return (
        <div
            className="app"
            style={{
                backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.85) 15%,
        rgba(0, 0, 0, 0.2) 40%,
        #000 90%
    ),url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
            }}
        >
            <div className="grid">
                <Header></Header>
                <Container></Container>
            </div>
        </div>
    );
}

export default App;
