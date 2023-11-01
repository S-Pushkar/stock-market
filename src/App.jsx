import { Link, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import './App.css';
import Home from './Home';
import Invest from './Invest'
import Portfolio from './Portfolio';
import About from './About';
import Signup from './Signup';
import Login from './Login';
import Facebook from "./assets/Facebook.png";
import AboutImg from "./assets/About.png";
import InstaImg from "./assets/Instagram.png";
import LinImg from "./assets/Linkedin.png";
import TwitImg from "./assets/X.png";
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
						<Link className={currentPage == 'Home' ? 'sm:text-xs lg:text-lg text-[rgb(115,218,230)]' : 'sm:text-xs lg:text-lg'} to="/">
							<div className='lg:px-6 px-2 bg-[rgb(64,64,64)] border-2 border-solid border-black rounded-xl'>Home</div>
						</Link>
						<Link className={currentPage == 'Invest' ? 'sm:text-xs lg:text-lg text-[rgb(115,218,230)]' : 'sm:text-xs lg:text-lg'} to="/invest">
							<div className='lg:px-6 px-2 bg-[rgb(64,64,64)] border-2 border-solid border-black rounded-xl'>Invest</div>
						</Link>
						<Link className={currentPage == 'Portfolio' ? 'sm:text-xs lg:text-lg text-[rgb(115,218,230)]' : 'sm:text-xs lg:text-lg'} to="/portfolio">
							<div className='lg:px-6 px-2 bg-[rgb(64,64,64)] border-2 border-solid border-black rounded-xl'>Portfolio</div>
						</Link>
						<Link className={(currentPage=='Signup'||currentPage=='Login') ? 'sm:text-xs lg:text-lg text-[rgb(115,218,230)]' : 'sm:text-xs lg:text-lg'} to={log=="Signup"?"/sign-up":"/log-in"}>
							<div className='lg:px-6 px-2 bg-[rgb(64,64,64)] border-2 border-solid border-black rounded-xl'>{log}</div>
						</Link>
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
						<Route path="log-in" element={<Login />} />
					</Routes>
				</main>

				<hr />
				<footer className='flex justify-start bg-[#000000]'>
					<div className={`foot-stuff`}>
						<Link className={`link ${'sm:text-xs lg:text-lg ml-8 mr-8 mb-8'}`} to="/about"><img className={`aboutimg`} src={AboutImg} alt="about" /></Link>
						<a className={`imgs ${'sm:text-xs lg:text-lg ml-8 mr-8 mb-8'}`} href="https://www.facebook.com/"><img className={`fbimg`} src={Facebook} alt="Facebook" /></a>
						<a className={`imgs ${'sm:text-xs lg:text-lg ml-8 mr-8 mb-8'}`} href="https://www.instagram.com/"><img className={`igimg`} src={InstaImg} alt="Instagram" /></a>
						<a className={`imgs ${'sm:text-xs lg:text-lg ml-8 mr-8 mb-8'}`} href="https://in.linkedin.com/"><img className={`inimg`} src={LinImg} alt="Facebook" /></a>
						<a className={`imgs ${'sm:text-xs lg:text-lg ml-8 mr-8 mb-8'}`} href="https://www.facebook.com/"><img className={`ximg`} src={TwitImg} alt="Facebook" /></a>
					</div>
				</footer>
			</div>
		</PageContext.Provider>
	);
}

export {PageContext};
export default App;