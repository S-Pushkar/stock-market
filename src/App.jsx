import {Link, Routes, Route} from 'react-router-dom';
import { createContext, useState } from 'react';
import './App.css';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Signup from './Signup';

const PageContext = createContext();

function App() {
	const [log, setLog] = useState('Sign Up');
	const [currentPage, setCurrentPage] = useState('Home');
	return (
		<PageContext.Provider value={{log, setLog, currentPage, setCurrentPage}}>
			<div className='min-h-screen flex flex-col'>
				<header>
					<h1 className='text-[rgb(77,212,106)] text-center font-bold'>Stocks</h1>
					<nav className='flex justify-end'>
						<Link className={currentPage == 'Home' ? 'ml-8 mr-8 underline' : 'ml-8 mr-8'} to="/">Home</Link>
						<Link className={currentPage == 'Portfolio' ? 'ml-8 mr-8 underline' : 'ml-8 mr-8'} to="/portfolio">Portfolio</Link>
						<Link className={currentPage == 'Signup' ? 'ml-8 mr-8 underline' : 'ml-8 mr-8'} to="/sign-up">{log}</Link>
					</nav>
					<hr className='mt-8 mb-8' />
				</header>

				<main className='flex-grow'>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/about" element={<About />} />
						<Route path="/sign-up" element={<Signup />} />
					</Routes>
				</main>

				<hr className='mt-8 mb-8' />
				<footer className='flex justify-start'>
					<Link className={currentPage == 'About' ? 'ml-8 mr-8 underline' : 'ml-8 mr-8'} to="/about">About</Link>
				</footer>
			</div>
		</PageContext.Provider>
	);
}

export {PageContext};
export default App;