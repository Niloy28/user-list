import React, { useState } from "react";

import Card from "../UI/Card";
import User from "../../types/User";

import styles from "../../styles/AddUser.module.css";
import Modal from "../UI/Modal";

const AddUser: React.FC<{ onAddUser: (user: User) => void }> = (props) => {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");

	const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const newUser: User = {
			username: username,
			age: parseInt(age),
		};

		props.onAddUser(newUser);
		setUsername("");
		setAge("");
	};

	const usernameChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setUsername(event.currentTarget.value);
	};

	const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAge(event.currentTarget.value);
	};

	return (
		<>
			<Modal
				buttonText="Okay"
				title="An error has occured"
				message="Something went wrong."
			/>
			<Card className={styles.addUserCard}>
				<form className={styles.addUserForm} onSubmit={addUserHandler}>
					<div className={styles.addUserField}>
						<label htmlFor="username">Username: </label>
						<input
							id="username"
							type="text"
							value={username}
							onChange={usernameChangeHandler}
						/>
					</div>

					<div className={styles.addUserField}>
						<label htmlFor="age">Age (Years): </label>
						<input
							id="age"
							type="number"
							value={age}
							onChange={ageChangeHandler}
						/>
					</div>

					<button type="submit">Add User</button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;
