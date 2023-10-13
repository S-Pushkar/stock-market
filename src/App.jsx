import {Link, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import { useState } from 'react'
import Signup from './Signup';

function App() {
	const [log, setLog] = useState('Sign Up');
	const [currentPage, setCurrentPage] = useState('Home');
	return (
		<div className='min-h-screen flex flex-col'>
			<header>
				<h1 className='text-[rgb(77,212,106)] text-center font-bold'>Stocks</h1>
				<nav className='flex justify-end'>
					<Link className={currentPage == 'Home' ? 'ml-8 mr-8 underline' : 'ml-8 mr-8'} to="/">Home</Link>
					<Link className={currentPage == 'Signup' ? 'ml-8 mr-8 underline' : 'ml-8 mr-8'} to="/sign-up">{log}</Link>
				</nav>
				<hr className='mt-8 mb-8' />
			</header>

			<main className='flex-grow'>
				<Routes>
					<Route path="/" element={<Home pageChange={setCurrentPage} />} />
					<Route path="/about" element={<About pageChange={setCurrentPage} />} />
					<Route path="/sign-up" element={<Signup pageChange={setCurrentPage} login={log} />} />
				</Routes>
			</main>

			<hr className='mt-8 mb-8' />
			<footer className='flex justify-start'>
				<Link className={currentPage == 'About' ? 'ml-8 mr-8 underline' : 'ml-8 mr-8'} to="/about">About</Link>
			</footer>
		</div>
	);
}

export default App
