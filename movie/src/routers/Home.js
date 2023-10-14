import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Movie from '../components/Movie';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
const [movies, setMovies] = useState([]);
const [isLoading, setLoading] = useState(true);

    const getMovies = () => {
    axios
        .get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
        .then((res) => {
        console.log('res.data:', res.data);
        setMovies(res.data.data.movies);
        setLoading(false);
    });
};

    useEffect(() => {
    getMovies();
    }, []);

    return (
        <section className='container'>
        {isLoading ? (
            <div className='loader'>
            <span>Loading...</span>
            </div>
        ) : (
            <Row xs={1} md={3}>
            {
                movies.map((movie) => (
                <Col key={movie.id}>
                <Movie
                    title={movie.title}
                    year={movie.year}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                />
                </Col>
                ))
            }
            </Row>
        )}
        </section>
    );
    };

export default Home;