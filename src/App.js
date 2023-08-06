import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashbord from "./pages/Dashbord";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Plans from "./pages/Plans";
import Mutuals from "./pages/Mutuals";
import Chat from "./pages/Chat";

function App() {
	return (
		<>
			<Router>
			
					<Routes>
					

						<Route path="/" element={<Register/>} />
						<Route path="/auth" element={<Main/>}/>
						<Route path='/schemes' element={<Plans/>} />
						<Route path='/investments' element={<Mutuals/>} />
						<Route path='/chat' element={<Chat/>} />

					</Routes>
			
			</Router>
		</>
	);
}

export default App;
