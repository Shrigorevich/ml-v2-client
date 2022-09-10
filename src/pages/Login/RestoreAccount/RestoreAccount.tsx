import { Link } from "react-router-dom";
import styles from './RestoreAccount.module.css';
import { useState } from "react";
import cn from 'classnames';

const RestoreAccount: React.FC = () => {
	let [buttonClicked, setButtonClicked] = useState<boolean>(false);
	let [email, setEmail] = useState<string>("");

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	return (
		<div className={styles.restore}>
			<div className={styles.restore_modal}>
				<div className={styles.restore_label}>
					<div className={styles.restore_label_icon}>
						<img src={require("../../../img/shovel.png")} alt="Login" />
					</div>
					<div className={styles.restore_label_text}>
						Restore Password
					</div>
				</div>
				{!buttonClicked
					? <div className={styles.restore_form}>
						<label htmlFor="restore">Enter your email address to receive a password recovery link.</label>
						<input onChange={onChangeHandler} type="email" name="restore" placeholder="Email" autoComplete="off" />
						<button type="button" onClick={() => { email.trim().length && setButtonClicked(true) }}>Procceed</button>
					</div>
					: <div className={cn(styles.restore_form, styles.linkSent)}>
						<p>The link has been sent to your email!</p>
					</div>
				}
				<div className={styles.restore_footer}>
					<Link to="/login" className={styles.restore_back}>
						Back to <span className={styles.back_to_login}>Log In</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RestoreAccount;