import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from './App';
import axios from 'axios';

export default function Portfolio() {
    const { log, setLog, currentPage, setCurrentPage } = useContext(PageContext);
    const [stockName, setStockName] = useState('');
	const [stknm, setStknm]= useState('');
	const [resp, setResp]=useState('');
    useEffect(() => {
        setCurrentPage('Portfolio');
    }, [currentPage]);
    const changeStockName=(e)=>{
            setStockName(e.target.value);
    };
	const upstknm =(e)=>{
		if(e.key==='Enter'){
			setStknm(stockName);
			fetchData();
			
		}
	};
	const url =`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stknm}&apikey=TZ0ZUENF0J4KPPOC`;
	const fetchData=()=>{
		axios.get(url)
			.then(response=>{
				setResp(response.data["Global Quote"]["10. change percent"]);
			})
			.catch(error=>{
				console.error('Error Fetching Data:', error);
			});
	}
    return (
        <div className="lg:px-20 px-8 md:text-base text-xs lg:text-base">
            <h1 className="text-[rgb(212,195,87)] mt-4 mb-2 text-sm lg:text-lg font-bold">PORTFOLIO</h1>
            <div>
                <input className={`rounded p-1 mt-4 mb-4 lg:w-1/2 searstock`} type="text" name="stockname" placeholder="Enter The Stock Symbol" value={stockName} onChange={changeStockName} onKeyPress={upstknm} required autoFocus/>
            </div>
            <div>
					<p className="text-center leading-relaxed">{resp}</p>
					
            </div>
        </div>
    );
}