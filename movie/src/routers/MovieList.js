import { Col, Container, Row } from "react-bootstrap";
import MovieItem from "./MovieItem";

const MovieList = ({movies, deleteId})=>{
    return(
        <Container>
            <Row>
                {
                    movies && movies.map((argument, index)=>(
                        <Col md={4} key={index}>
                            <MovieItem key={argument.id}
                            argument={argument}
                            deleteId={deleteId}/>
                            <br/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
export default MovieList;