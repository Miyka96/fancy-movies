import styles from "./modal.module.scss";

const Modal = ({}) => {
  return (
    <div class={styles.container}>
      <div class={styles.popup}>
        <div class={styles.popup_inner}>
          <div class={styles.popup__photo}>
            <img src="" alt="" />
          </div>
          <div class={styles.popup__text}>
            <h1>Lorem </h1>
            <p>Lorem .</p>
          </div>
          <a class={styles.popup__close} href="#">
            X
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
