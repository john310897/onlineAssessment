import './App.css';
import Home from './Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Questions from './components/Questions';
import FinalResult from './components/FinalResult';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/questions' element={<Questions />} />
					<Route path='/result' element={<FinalResult />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
