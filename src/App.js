import search from './search.svg';
import './App.css';
import {useState,useEffect} from 'react';
import MovieCard from './Components/MovieCard';



const api_Key = "c9e31bb3";
const api_Url = `http://www.omdbapi.com?apikey=${api_Key}`;

function App() {
  const [searchTerm,setSearchTerm] = useState("");
  const [movies,setMovies] = useState([]);


  useEffect(() => {
    searchMovies("Batman");
  },[])


  const searchMovies = async (title) => {
    const response = await fetch(`${api_Url}&s=${title}`);
    const jsonData = await response.json();

    setMovies(jsonData.Search)
  }



  return (
    <>
    <div className="app">
      <h1> Movie Mania</h1>
        <div className="search">
          <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search for movies" />
          <img src={search} alt="search" onClick={(e) => searchMovies(searchTerm)} />
        </div>
            {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie, index) => (
                <MovieCard movie={movie} indexId={index}/>
              ))}
            </div>
            ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
    </div>
    </>
  );
}

export default App;
