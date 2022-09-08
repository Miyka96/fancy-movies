import styles from "./cardlist.module.scss";
import Card from "../Card/Card";

const Cardlist = ({ films, genre }) => {
  return (
    <>
    <h1>Popular {genre} movies</h1>
    <div className={styles.cardlist}>
      {films.map((el,i) => (
        <Card key={i} title={el.original_title} description={el.overview} image={el.poster_path} vote={el.vote_average}/>
      ))}
    </div>
    </>

  );
};

export default Cardlist;
