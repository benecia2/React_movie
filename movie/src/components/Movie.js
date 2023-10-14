import { Link } from 'react-router-dom';
import './Movie.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Movie = ({ id, title, year, summary, poster, genres}) => {
    return (

        <Card>
        <Card.Img variant="top" src={poster} alt={title} title={title} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Year: {year}</Card.Text>
            <Card.Text>Genres: {genres.join(', ')}</Card.Text>
            <Card.Text>{summary.slice(0, 100)}...</Card.Text>
            <Link to="/detail" state={{ year, title, summary, poster, genres }}>
            <Button variant="outline-primary">상세보기</Button>
            </Link>
        </Card.Body>
    </Card>

        );
    };
    export default Movie;