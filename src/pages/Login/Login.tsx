import { useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from './Login.module.css';

const Login: React.FC = () => {
	useEffect(() => {
		document.title = 'Login';
	}, [])

	return (
		<div className={styles.login}>
			<div className={styles.login_modal}>
				<div className={styles.login_label}>
					<div className={styles.login_label_icon}>
						<img src={require("../../img/sword.png")} alt="Login" />
					</div>
					<div className={styles.login_label_text}>
						Welcome back!
					</div>
				</div>
				<div className={styles.login_form}>
					<input type="text" name="login" placeholder="Login" autoComplete="off" />
					<input type="password" name="password" placeholder="Password" autoComplete="off" />
					<button type="button">Login</button>
				</div>
				<div className={styles.login_footer}>
					<Link to="/restore" className={styles.login_forgot_password}>Forgot your password?</Link>
					<Link to="/register" className={styles.login_sign_up}>
						Don’t have an account? <span className={styles.login_get_started}>Get started</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;