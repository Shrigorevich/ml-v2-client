import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RestoreAccount from "./pages/Login/RestoreAccount/RestoreAccount";
import NewPassword from "./pages/Login/NewPassword/NewPassword";

const Main: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/login' element={<Login />} />
			<Route path='/restore' element={<RestoreAccount />} />
			<Route path='/newpassword-temp' element={<NewPassword />} />
			<Route path='/register' element={<Register />} />
		</Routes>
	);
}

export default Main;