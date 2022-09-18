import styles from'./App.module.scss';
import {useState, useEffect} from 'react';
import {GET, SEARCH} from './utils/api';
import Header from './Components/Header/Header';
import Carousel from "./Components/Carousel/Carousel";
import Main from './Components/Main/Main';


function App() {
  const [genre, setGenre] = useState(null);
  const [genreName, setGenreName] = useState("All");
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);
  const [topRated, setTopRated] = useState([]);

  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  useEffect(() => {
    GET("popular",page, genre)
    .then(data => setFilms(data.results));
    GET("top_rated",page, genre)
    .then(data => setTopRated(data.results));
  }, [page, genre]);

  const handleChange = (e) => {
    setGenre(e.target.value)
    setGenreName(e.target.options[e.target.selectedIndex].text)
  }
  const searchFilm = (e) => {
    const query=(e);
    if(query.length>1){
      SEARCH(query, page)
      .then(data=>setFilms(data.results));
    }
  }

  return (
    <div className={styles.App}>
      <Header onChange={handleChange} onClick={searchFilm}/>
      <Carousel data={topRated}/>
      {films && <Main data={films} currentGenre={genreName}/>}
    </div>
  );
}

export default App;
