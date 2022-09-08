import styles from "./main.module.scss";
import Cardlist from "../CardList/Cardlist";

const Main = ({ data, currentGenre }) => {
  return (
    <div className={styles.mainContent}>
      <Cardlist films={data} genre={currentGenre}/>
    </div>
  );
};

export default Main;
