import React, { useState } from "react";

import Card from "../UI/Card";
import Modal from "../UI/Modal";
import User from "../../types/User";
import ErrorMessage from "../../types/ErrorMessage";

import styles from "../../styles/AddUser.module.css";

const AddUser: React.FC<{ onAddUser: (user: User) => void }> = (props) => {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");
	const [errorMessage, setErrorMessage] = useState<ErrorMessage | undefined>();

	const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const trimmedUsername = username.trim();
		const trimmedAge = age.trim();

		if (trimmedUsername.length === 0 || trimmedAge.length === 0) {
			setErrorMessage({
				title: "Invalid Input",
				message: "Please fill all fields.",
			});
		} else if (+trimmedAge < 0) {
			setErrorMessage({
				title: "Invalid Age",
				message: "Age must be positive.",
			});
		} else {
			const newUser: User = {
				username: username.trim(),
				age: parseInt(age.trim()),
			};

			props.onAddUser(newUser);
			setUsername("");
			setAge("");
		}
	};

	const usernameChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setUsername(event.currentTarget.value);
	};

	const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAge(event.currentTarget.value);
	};

	const clearErrorHandler = () => {
		setErrorMessage(undefined);
	};

	return (
		<>
			{errorMessage && (
				<Modal
					title={errorMessage.title}
					message={errorMessage.message}
					onClearModal={clearErrorHandler}
				/>
			)}

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
