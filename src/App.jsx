import styles from'./App.module.scss';
import {useState, useEffect} from 'react';
import {GET} from './utils/api';
import Header from './Components/Header/Header';
import Carousel from "./Components/Carousel/Carousel";
import Main from './Components/Main/Main';

function App() {
  const [genre, setGenre] = useState(null);
  const [genreName, setGenreName] = useState("All");
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);
  const [topRated, setTopRated] = useState([]);

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
  return (
    <div className={styles.App}>
      <Header onChange={handleChange}/>
      <Carousel data={topRated}/>
      <Main data={films} currentGenre={genreName}/>
    </div>
  );
}

export default App;
