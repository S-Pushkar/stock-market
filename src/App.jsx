import {Link, Routes, Route} from 'react-router-dom';
import { createContext, useState } from 'react';
import './App.css';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Signup from './Signup';

const PageContext = createContext();

function App() {
	const [log, setLog] = useState('Signup');
	const [currentPage, setCurrentPage] = useState('Home');
	return (
		<PageContext.Provider value={{log, setLog, currentPage, setCurrentPage}}>
			<div className='min-h-screen flex flex-col justify-center'>
				<header className='flex flex-col justify-center'>
					<h1 className='text-[rgb(77,212,106)] text-center font-bold'>Stocks</h1>
					<nav className='flex justify-between my-8 mx-4 lg:p-4 p-0'>
						<Link className={currentPage == 'Home' ? ' underline' : ''} to="/">Home</Link>
						<Link className={currentPage == 'Portfolio' ? ' underline' : ''} to="/portfolio">Portfolio</Link>
						<Link className={currentPage == 'Signup' ? ' underline' : ''} to="/sign-up">{log}</Link>
					</nav>
					<hr className='mb-8' />
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