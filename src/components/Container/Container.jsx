import "./Container.css";
import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

function Container() {
    const { data } = useContext(MovieContext);

    return (
        <div className="container">
            <img src={data.posterIMG} alt="" className="container__img" />
            <div className="container__content">
                <h1 className="container__title">{data.original_title}</h1>
                <h2 className="container__caption">{data.tagline}</h2>
                <p className="container__des">{data.overview}</p>
                <h2 className="container__category">{data.genresList}</h2>
                <p className="container__category-des">{data.productionList}</p>

                <div className="container__statistic">
                    <div className="container__statistic-item">
                        <h3 className="container__statistic-heading">
                            Original Release:
                        </h3>
                        <span className="container__statistic-content">
                            {data.release_date}
                        </span>
                    </div>
                    <div className="container__statistic-item">
                        <h3 className="container__statistic-heading">
                            Running Time:
                        </h3>
                        <span className="container__statistic-content">
                            {data.runtime} mins
                        </span>
                    </div>
                    <div className="container__statistic-item">
                        <h3 className="container__statistic-heading">
                            Box Office:
                        </h3>
                        <span className="container__statistic-content">
                            {data.totalRevenue}
                        </span>
                    </div>
                    <div className="container__statistic-item">
                        <h3 className="container__statistic-heading">
                            Vote Average:
                        </h3>
                        <span className="container__statistic-content">
                            {data.vote}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;
