import styles from "./card.module.scss";

const Card = ({ title, description , image, vote}) => {
  return (
	<div className={styles.card}>
		<figure className={styles.card__thumb}>
			<img src={"https://image.tmdb.org/t/p/w500/"+image} alt={title} className={styles.card__image}/>
			<figcaption className={styles.card__caption}>
				<h2 className={styles.card__title}>{title}</h2>
				<p className={styles.card__snippet}>{description}</p>
                <div className={styles.rating}>Rating <span>{vote}/10</span> </div>
			</figcaption>
		</figure>
	</div>
  );
};

export default Card;
