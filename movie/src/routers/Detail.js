import { useLocation } from 'react-router-dom'
import './MovieView.css'

const Detail=()=>{
    const location = useLocation();
    console.log({location})
    return(
        <div className='movie_container'>
            <img src={location.state.poster}
            alt={location.state.title} title={location.state.title}/>
            <div className='movie_data'>
                <h3 className='movie_title'>app06 {location.state.title}</h3>
                <h5 className='movie_year'>{location.state.year}</h5>
                <h5 className='movie_summary'>{location.state.summary}</h5>
                <ul className='movie_genres'>
                    {
                        location.state.genres.map((genre, index)=>{
                            return(
                                <li key={index}>
                                    {genre}
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        </div>
    )
}
export default Detail;