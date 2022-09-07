import styles from "./header.module.scss";
import Carousel from "../Carousel/Carousel";
import { useState, useEffect } from "react";
import { GET } from "../../utils/api";

const Header = () => {

  const [genre, setGenre] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    GET(page, genre);
  }, [page, genre]);

  const handleChange = (e) => {
    setGenre(e.target.value);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>logo</div>
        <nav>nav</nav>

        <select onChange={handleChange}>
          <option value="null">All Genres</option>
          <option value="28">Action</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="14">Fantasy</option>
          <option value="36">History</option>
          <option value="27">Horror</option>
          <option value="53">Thriller</option>
        </select>

        <div className={styles.searchBar}>search</div>
      </div>
      <Carousel />
    </>
  );
};
export default Header;
