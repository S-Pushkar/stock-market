import {Link, Routes, Route} from 'react-router-dom';
import { createContext, useState } from 'react';
import './App.css';
import Home from './Home';
import Invest from './Invest'
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
				<header className='sticky top-0 flex flex-col justify-center bg-[#000000]'>
					<Link to="/">
						<h1 className='text-[rgb(77,212,106)] text-s lg:text-3xl text-center font-bold'>Stocks</h1>
					</Link>
					<nav className='flex flex-wrap flex-shrink-10 items-center justify-between md:justify-start lg:justify-start my-4 mx-4 lg:p-4 p-0'>
						<div className='lg:px-6 px-2 bg-[rgb(64,64,64)] border-2 border-solid border-black rounded-xl'>
							<Link className={currentPage == 'Home' ? 'sm:text-xs lg:text-lg text-[rgb(115,218,230)]' : 'sm:text-xs lg:text-lg'} to="/">Home</Link>
						</div>
						<div className='lg:px-6 px-2 bg-[rgb(64,64,64)] border-2 border-solid border-black rounded-xl'>
							<Link className={currentPage == 'Invest' ? 'sm:text-xs lg:text-lg text-[rgb(115,218,230)]' : 'sm:text-xs lg:text-lg'} to="/invest">Invest</Link>
						</div>
						<div className='lg:px-6 px-2 bg-[rgb(64,64,64)] border-2 border-solid border-black rounded-xl'>
							<Link className={currentPage == 'Portfolio' ? 'sm:text-xs lg:text-lg text-[rgb(115,218,230)]' : 'sm:text-xs lg:text-lg'} to="/portfolio">Portfolio</Link>
						</div>
						<div className='lg:px-6 px-2 bg-[rgb(64,64,64)] border-2 border-solid border-black rounded-xl'>
							<Link className={currentPage == 'Signup' ? 'sm:text-xs lg:text-lg text-[rgb(115,218,230)]' : 'sm:text-xs lg:text-lg'} to="/sign-up">{log}</Link>
						</div>
					</nav>
					<hr />
				</header>
				<main className='flex-grow'>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/invest" element={<Invest />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/about" element={<About />} />
						<Route path="/sign-up" element={<Signup />} />
					</Routes>
				</main>

				<hr className='mt-8 mb-8' />
				<footer className='flex justify-start'>
					<Link className={currentPage == 'About' ? 'sm:text-xs lg:text-lg ml-8 mr-8 mb-8 text-[rgb(115,218,230)]' : 'sm:text-xs lg:text-lg ml-8 mr-8 mb-8'} to="/about">About</Link>
				</footer>
			</div>
		</PageContext.Provider>
	);
}

export {PageContext};
export default App;