import AddUser from "./components/Users/AddUser";

import styles from "./styles/App.module.css";

function App() {
	return (
		<div className={styles.app}>
			<AddUser />
		</div>
	);
}

export default App;
