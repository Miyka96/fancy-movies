import styles from "./header.module.scss";
import logo from "../../Assets/Images/logoipsum-221.svg";
import {useState,useRef} from 'react';

const Header = ({onChange, onClick}) => {

  const handleChange = (e) => {
    onChange(e);
  };
  const inputRef = useRef('');
  const handleSearch = (e) => {

    if(inputRef.current.value.length > 0) {
      e=inputRef.current.value
      onClick(e);
    }
  }

  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileActive = () => {
    setMobileMenu(true);
    if (mobileMenu===true) {
      setMobileMenu(false)
    }
  }
  const redirectToHomePage = () => {
    window.location.reload();
  }

  return (

    <>
      <div className={ mobileMenu === false ? styles.header : `${styles.sidebar} ${styles.active}`}>

        <div onClick={redirectToHomePage} className={styles.logo}>
          <img alt="logo" src={logo}/>
        </div>
        
        <div className={styles.searchBar} >
          <input type="search" ref={inputRef} />
          <button className={styles.btnSearch} onClick={handleSearch}>Search</button>
        </div>

        <div className={styles.select_wrapper}>
          <span>Select a genre: </span>
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

      </div>

      {/* burger */}
      <div onClick={mobileActive} className={ mobileMenu === false ? styles.hamburger : `${styles.hamburger} ${styles.active}`}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
      </div>
  </>
  );
};
export default Header;
