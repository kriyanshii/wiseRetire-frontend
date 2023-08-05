import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashbord from "./pages/Dashbord";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";

function App() {
	return (
		<>
			<Router>
				<div className="container">
					<Routes>
						<Route path="/" element={<Dashbord/>} />
						<Route path="/login" element={<Login/>} />
						<Route path="/register" element={<Register/>} />
						<Route path="/auth" element={<Main/>}/>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
