import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Home from './routers/Home';
import About from "./routers/About";
import Navigation from "./components/Navigation";
import Poster from "./routers/Poster";
import Detail from "./routers/Detail";
import Insert from "./routers/Insert";
import {useState, useEffect} from "react"
import axios from "axios"
import MovieList from "./routers/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  // const navigate = useNavigate();
  const [movieList, setMovieList] = useState([])

  useEffect(()=>{
    findAll()
  },[])

  //추가
  const save = (data)=>{
    axios.post("/movie/insert",{
      title: data.title,
      summary: data.summary,
      year: data.year,
      genres: data.genres
    }).then((resp)=>{
      alert("추가완료")
      setMovieList(movieList.concat(
        {
          id: resp.data.id,
          title: data.title,
          summary: data.summary,
          year: data.year,
          genres: data.genres,
          ...movieList
        }
      ))
      // navigate("/list")
    })
  }

  //전체보기
  const findAll=()=>{
    axios.get("/movie/list").then((resp)=>{
      console.log(resp.data)
      setMovieList(resp.data)
    })
  }

  //삭제
  const deleteId = (id)=>{
    axios.delete("/movie/delete/"+id).then(()=>{
      alert("삭제 성공")
      setMovieList(movieList.filter(argument=>argument.id !== id))
    })
  }

 

  return (
    
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path={"/"} element={<Home/>}></Route>
      <Route path={"/about"} element={<About/>}></Route>
      <Route path={"/poster"} element={<Poster/>}></Route>
      <Route path={"/detail"} element={<Detail/>}></Route>
      <Route path={"/insert"} element={<Insert save={save}
      findAll={findAll}/>}/>
      <Route path={"/list"} element={<MovieList movies={movieList} deleteId={deleteId} />}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App