import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import User from "./types/User";

import styles from "./styles/App.module.css";

const DUMMY_USERS: User[] = [
	{
		username: "Bobby",
		age: 53,
	},
];

function App() {
	const [users, setUsers] = useState<User[]>(DUMMY_USERS);

	const addUserHandler = (user: User) => {
		setUsers((prevUsers) => [...prevUsers, user]);
	};

	const removeUserHandler = (user: User) => {
		setUsers((prevUsers) => prevUsers.filter((u) => u !== user));
	};

	return (
		<div className={styles.app}>
			<AddUser onAddUser={addUserHandler} />
			<UserList users={users} />
		</div>
	);
}

export default App;
