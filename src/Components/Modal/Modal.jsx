import styles from "./modal.module.scss";

const Modal = ({isVisible ,onClick}) => {

  
  const handleClick = (e) => {
    onClick(e.target)
  }

  return (
    <div className={styles.modal} style={{display: isVisible === true ? 'flex' : 'none' }}>
      <div className={styles.modal_wrapper}>
      <i onClick={handleClick} id="close_modal">&#10006;</i>
          <h4>{title}</h4>
          <img alt="titolo" src={"https://image.tmdb.org/t/p/w300/"+filmData.backdrop_path}/>
          <p>  <span className={styles.release}>{filmData.release_date}</span> <br/> paragrafo descr</p>
          <div className={styles.rating}>Rating <span> voto/ 10 </span> </div>
      </div>
    </div>
  );
};

export default Modal;
