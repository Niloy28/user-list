import { v4 as uuidv4 } from "uuid";

import Card from "../UI/Card";
import User from "../../types/User";

import styles from "../../styles/UserList.module.css";

const UserList: React.FC<{ users: User[] }> = (props) => {
	return (
		<Card className={styles.userList}>
			<ul>
				{props.users.map((user) => (
					<li key={uuidv4()}>
						{user.username} is {user.age} year(s) old.
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UserList;
