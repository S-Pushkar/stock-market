import React, { useContext, useEffect } from 'react';
import { PageContext } from './App';
import AboutImg from './assets/AboutImg.svg';
import './App.css';

export default function About() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
    useEffect(() => {
        setCurrentPage('About');
    }, [currentPage]);
    return (
        <div className="lg:px-20 px-8 md:text-base text-xs lg:text-base">
            <h1 className="text-[rgb(212,195,87)] mt-4 mb-2 text-sm lg:text-lg font-bold">ABOUT</h1>
           <div className="grid grid-cols-2 grid-rows-3 min-h-screen mt-8 mb-8">
				<div className={`profimg ${'bg-grey-400 p-4 rounded-lg flex justify-center items-center'}`}
					style={{
					backgroundImage: `url(${AboutImg})`,
					height:'20em',
					width:'auto',
					backgroundSize: 'contain',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					}}>
				</div>
				<div className={`abtxt ${'bg-grey-400 p-4 prose lg:prose-xl prose-p:text-grey-900  hover:text-white rounded-xl flex justify-center'}`}>
					<p className="text-center leading-relaxed">
					<h2 style={{color:'white',}}>Priyanshu Sachan</h2>
						About Priyanshu Sachan
					</p>
				</div>
				<div className={`abtxt ${'bg-grey-400 p-4 prose lg:prose-xl prose-p:text-grey-900  hover:text-white rounded-xl flex justify-center'}`}>
					<p className="text-center leading-relaxed">
					<h2 style={{color:'white',}}>Pushkar P Urs</h2>
						About Pushkar Urs
					</p>
				</div>
				<div className={`profimg ${'bg-grey-400 p-4 rounded-lg flex justify-center items-center'}`}
					style={{
					backgroundImage: `url(${AboutImg})`,
					height:'20em',
					width:'auto',
					backgroundSize: 'contain',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					}}>
				</div>
				<div className={`profimg ${'bg-grey-400 p-4 rounded-lg flex justify-center items-center'}`}
					style={{
					backgroundImage: `url(${AboutImg})`,
					height:'20em',
					width:'auto',
					backgroundSize: 'contain',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					}}>
				</div>
				<div className={`abtxt ${'bg-grey-400 p-4 prose lg:prose-xl prose-p:text-grey-900  hover:text-white rounded-xl flex justify-center'}`}>
					<p className="text-center leading-relaxed">
					<h2 style={{color:'white',}}>Pushkar S</h2>
						About Pushkar S
					</p>
				</div>
		   </div>
        </div>
    );
}
