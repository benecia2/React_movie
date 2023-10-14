import { Button, Card } from "react-bootstrap";

const MovieItem = ({argument, deleteId})=>{
    return(
        <Card style={{width:'18rem'}}>
            <Card.Body>
                <Card.Title>제목:{argument.title}</Card.Title>
                <Card.Text>
                    식별번호: {argument.id} <br/>
                    년도 : {argument.year} <br/>
                    장르 :  {argument.genres} <br/>
                    줄거리 : {argument.summary} <br/>
                </Card.Text>
                <Button variant="outline-danger" onClick={()=> deleteId(argument.id)}>삭제</Button>
            </Card.Body>
        </Card>
    )
}
export default MovieItem;