import ModalProps from "../../types/ModalProps";
import Card from "./Card";

import styles from "../../styles/Modal.module.css";

const Modal: React.FC<ModalProps> = (props) => {
	return (
		<div>
			<div className={styles.backdrop}></div>
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h2>{props.title}</h2>
				</header>
				<div>
					<p>{props.message}</p>
				</div>
				<footer>
					<button>{props.buttonText}</button>
				</footer>
			</Card>
		</div>
	);
};

export default Modal;
