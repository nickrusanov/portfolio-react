import './css/style.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contacts from './pages/Contacts';
import Work from './pages/Work';

import ScrollToTop from './utils/ScrollToTop'

function App() {
	return (
		<div className="App">
			<Router>
				<Header />

				<Routes>
					<Route path='/' element={<Projects />} />
					<Route path='/work/:id' element={<Work />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/contacts' element={<Contacts />} />
				</Routes>

				<Footer />

				<ScrollToTop />
			</Router>
		</div>
	);
}

export default App;