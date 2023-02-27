import { createPortal } from "react-dom";

import Card from "./Card";
import ModalProps from "../../types/ModalProps";

import styles from "../../styles/Modal.module.css";

const ModalElement: React.FC<ModalProps> = (props) => {
	return (
		<>
			<div className={styles.backdrop} onClick={props.onClearModal}></div>
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h2>{props.title}</h2>
				</header>
				<div>
					<p>{props.message}</p>
				</div>
				<footer>
					<button onClick={props.onClearModal}>
						{props.buttonText === undefined ? "Okay" : props.buttonText}
					</button>
				</footer>
			</Card>
		</>
	);
};

const Modal: React.FC<ModalProps> = (props) => {
	return (
		<>
			{createPortal(
				<ModalElement {...props} />,
				document.getElementById("modal-root")!
			)}
		</>
	);
};

export default Modal;
