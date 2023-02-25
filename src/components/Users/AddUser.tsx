import Card from "../UI/Card";

import styles from "../../styles/AddUser.module.css";

const AddUser = () => {
	const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<Card className={styles.addUserCard}>
			<form className={styles.addUserForm} onSubmit={formSubmitHandler}>
				<div className={styles.addUserField}>
					<label htmlFor="username">Username: </label>
					<input id="username" type="text" />
				</div>

				<div className={styles.addUserField}>
					<label htmlFor="age">Age (Years): </label>
					<input id="age" type="number" />
				</div>

				<button type="submit">Add User</button>
			</form>
		</Card>
	);
};

export default AddUser;
