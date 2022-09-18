import { useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "./../Login/Login.module.css";
import stylesRegister from "./Register.module.css";
import cn from "classnames";

const Register: React.FC = () => {
	useEffect(() => {
		document.title = 'Sign Up';
	}, []);

	return (
		<div className={styles.login}>
			<div className={styles.login_modal}>
				<div className={styles.login_label}>
					<div className={styles.login_label_icon}>
						<img src={require("../../img/axe.png")} alt="Sign Up" />
					</div>
					<div className={styles.login_label_text}>
						New User
					</div>
				</div>
				<div className={styles.login_form}>
					<input type="email" name="email" placeholder="Email" autoComplete="off" />
					<input type="text" name="login" placeholder="Login" autoComplete="off" />
					<input type="password" name="password" placeholder="Password" autoComplete="off" />
					<input type="password" name="repeatPassword" placeholder="Repeat Password" autoComplete="off" />
					<button type="button">Sign Up</button>
				</div>
				<div className={styles.login_footer}>
					<Link to="/login" className={cn(styles.login_footer_right, stylesRegister.login_footer_right)}>
						Already have an account? <span>Sign In</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;