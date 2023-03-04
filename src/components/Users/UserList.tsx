import Card from "../UI/Card";
import User from "../../types/User";

import styles from "../../styles/UserList.module.css";

const UserList: React.FC<{
	users: User[];
	onUserDelete: (userId: string) => void;
}> = (props) => {
	const userClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
		props.onUserDelete(event.currentTarget.id);
	};

	return (
		<Card className={styles.userList}>
			<ul>
				{props.users.map((user) => (
					<li key={user.id} id={user.id} onClick={userClickHandler}>
						{user.username} is {user.age} year(s) old.
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UserList;
