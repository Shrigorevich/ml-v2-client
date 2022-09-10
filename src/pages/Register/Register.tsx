import { useEffect } from 'react';
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
	useEffect(() => {
		document.title = 'Sign Up';
	}, [])

	return (
		<div className={styles.register}>
			<div className={styles.register_modal}>
				<div className={styles.register_label}>
					<div className={styles.register_label_icon}>
						<img src={require("../../img/axe.png")} alt="Login" />
					</div>
					<div className={styles.register_label_text}>
						New User
					</div>
				</div>
				<div className={styles.register_form}>
					<input type="email" name="email" placeholder="Email" autoComplete="off" />
					<input type="text" name="login" placeholder="Login" autoComplete="off" />
					<input type="password" name="password" placeholder="Password" autoComplete="off" />
					<input type="password" name="repeatPassword" placeholder="Repeat Password" autoComplete="off" />
					<button type="button">Sign Up</button>
				</div>
				<div className={styles.register_footer}>
					<Link to="/login" className={styles.register_have_account}>
						Already have an account? <span className={styles.register_sign_in}>Sign In</span>
					</Link>
				</div>
			</div>
		</div>

	);
};

export default Register;