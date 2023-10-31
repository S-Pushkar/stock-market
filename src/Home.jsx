import React, { useContext, useEffect } from "react";
import { PageContext } from './App';
import backgroundImage from './background3.jpg';
import backgroundImage2 from './background2.jpg';
export default function Home() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
	//const [text, setText] = useState("Dynamic Text");
    useEffect(() => {
        setCurrentPage('Home');        
    }, [currentPage]);    
    return (
        <div className="lg:px-20 px-8 md:text-base text-xs lg:text-base">
            <h1 className="text-[rgb(212,195,87)] mt-4 mb-2 text-sm lg:text-lg font-bold">HOME</h1>
			<div className="grid grid-cols-2 grid-rows-2 h-screen">
				<div className="bg-grey-400 p-4 rounded-lg flex justify-center items-center"
					style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: 'contain',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					}}>
				</div>
				<div className="bg-grey-400 p-4 prose lg:prose-xl prose-p:text-grey-900 hover:prose-p:text-blue-600 rounded-xl flex justify-center items-center">
				
				<p className="text-center leading-relaxed">
				Hello there my good friends. Are you tired of losing money
				investing in stocks? Have you lost faith in the market? Are
				you perhaps thinking of exiting? Well let me tell you that 
				99% of all gamblers quit right before they win big. </p>
				
				</div>
				<div className="bg-grey-400 p-4 prose lg:prose-xl prose-p:text-grey-900 hover:prose-p:text-blue-600 rounded flex justify-center items-center">
				
				<p className="text-center leading-relaxed">
				All you need
				is a little luck, a lot of patience and the right partner, to help you navigate the ever changing market.
				With us as your broker youll never have to worry about returns again. Well take you from bankrupt to 
				bull in no time at all. So whatre you waiting for, buy stocks now!</p>
				
				</div>
				<div className="bg-grey-400 p-2 rounded flex justify-center items-center"
					style={{
					backgroundImage: `url(${backgroundImage2})`,
					backgroundSize: 'contain',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					}}>
				</div>
			</div>
        </div>
    );
}