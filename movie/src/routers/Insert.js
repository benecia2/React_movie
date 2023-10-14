import {useState} from "react"
import { Button, Container, Form } from "react-bootstrap"
import axios from "axios"
import { useNavigate } from "react-router-dom";


const Insert = ({save,findAll})=>{
  const navigate = useNavigate();
    const [formContent, setFormContent] = useState({
        title: '',
        year: '',
        genres:'',
        summary: ''
    })

    const getValue = (e)=>{
        setFormContent({
            ...formContent,
            [e.target.name]: e.target.value
        })
    }


//submit(추가)
const submitTodo =()=>{
    axios.post('movie/insert', {
        title : formContent.title,
        year : formContent.year,
        genres: formContent.genres,
        summary : formContent.summary
    }).then(()=>{
        alert('등록완료')
        findAll();
      navigate("/list")
    })
}

    return(
        <Container>
        <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" placeholder="title" name="title"
          onChange={getValue} value={formContent.title}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="year">
          <Form.Label>년도</Form.Label>
          <Form.Control type="text" placeholder="year" name="year"
          onChange={getValue} value={formContent.year}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="genres">
          <Form.Label>장르</Form.Label>
          <Form.Control type="text" placeholder="genres" name="genres"
          onChange={getValue} value={formContent.genres}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="summary">
          <Form.Label>줄거리</Form.Label>
          <Form.Control as="textarea"  rows={10} cols={60} name="summary" 
          onChange={getValue} value={formContent.summary}/><br/>
        </Form.Group>
        <div>
          <Button variant="outline-info" onClick={()=>save(formContent)}>전송1</Button>
          <Button variant="outline-danger" onClick={submitTodo}>전송2</Button>
        </div>
      </Form>
    </Container>
    );
}
export default Insert;