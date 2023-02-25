import CardProps from "../../types/CardProps";

import styles from "../../styles/Card.module.css";

const Card: React.FC<CardProps> = (props) => {
	const classes = `${styles.card} ${props.className}`;

	return <div className={classes}>{props.children}</div>;
};

export default Card;
