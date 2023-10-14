import axios from "axios";
import { useEffect, useState } from "react";
import './Home.css';

const Poster = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMovies = () => {
        axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
        .then((res) => {
            console.log("res.data:", res.data);
            setMovies(res.data.data.movies);
            setLoading(false);
        })
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <section className="container">
            {
                isLoading ? (
                    <div className="loader">
                        <span>Loading</span>
                    </div>
            ) : (
                    <div className="movies">
                    {
                        movies.map((movie) => (
                        <img key={movie.id}
                            src={movie.medium_cover_image}
                            alt={movie.title} 
                        
                        />
                        
                    ))}
                </div>
            )}
        </section>
    );
}

export default Poster;