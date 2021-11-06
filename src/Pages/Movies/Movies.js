import axios from "axios";
import { useState, useEffect } from "react";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import Genres from "../../Components/SingleContent/Genres";
import SingleContent from "../../Components/SingleContent/SingleContent";
import useGenres from "../../hooks/useGenre";
import '../Trending/Trending.css';

const Movies = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState(1);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforUrl = useGenres(selectedGenres) ;

    const fetchMovies =  async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforUrl}`)
        // console.log(data);
        setContent(data.results);
    }


    useEffect(() => {
        fetchMovies(); 
    }, [page, genreforUrl])

    return (
        <div> 
            <span className="pageTitle">Movies</span>
            <Genres
                type='movie'
                selectedGenres={selectedGenres} 
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres} 
                setPage={setPage} 
            />
            <div className="trending"> 
              {
                content && content.map((c) => 
                    <SingleContent 
                        key={c.id} 
                        id={c.id} 
                        poster={c.poster_path} 
                        title={c.title || c.name} 
                        date={c.first_air_date || c.release_date} 
                        media_type='movie'
                        vote_average={c.vote_average}
                    />)
              }
          </div>
          { numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
          )}
        
          </div>
    )
}

export default Movies

 