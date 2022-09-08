import styles from "./header.module.scss";
import logo from "../../Assets/Images/logoipsum-221.svg"

const Header = ({onChange}) => {

  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <>
      <div className={styles.header}>

        <div className={styles.logo}>
          <img src={logo}/>
        </div>

        <div className={styles.searchBar}>search</div>
        <span>Select a genre &#8594; </span>
        <select className={styles.custom_select} onChange={handleChange}>
          <option value="null">All</option>
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
      </div>
    </>
  );
};
export default Header;
