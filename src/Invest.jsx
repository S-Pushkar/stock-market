import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from './App';
import axios from 'axios';
import GreenArrow from "./GreenArrow.svg";
import RedArrow from "./RedArrow.svg";
import './App.css';

export default function Invest() {
    const { log, setLog, currentPage, setCurrentPage } = useContext(PageContext);
    const [stockName, setStockName] = useState(''); //This is whatever is typed in text bar
	const [stknm, setStknm]= useState(''); //Symbol of the best match stock
	const [resp, setResp]=useState(''); //percentage change in the stock
	const [searn,setSearn]=useState(''); //When enter is pressed in text bar the query is stores here
	const [inc,setInc]=useState(null); //change in the stock price ($)
	const [pname, setPname]=useState(''); //this is the name of the best match stock
	const [sprice, setSprice]=useState(null);
    useEffect(() => {
        setCurrentPage('Invest');
    }, [currentPage]);
    const changeStockName=async function(e){
           await setStockName(e.target.value);
    };
	const upstknm =async function(e){
		if(e.key==='Enter'){
			await setSearn(stockName);
			await fetchName();
		}
	};
	//TZ0ZUENF0J4KPPOC API key
	//DVLNHBAEF8ZX4L4Z API key
	const apiKey="TZ0ZUENF0J4KPPOC";
	const url =`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stknm}&apikey=${apiKey}`;
	const surl=`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searn}&apikey=${apiKey}`;
	
	// "bestMatches": [
        // {
            // "1. symbol": "TSCO.LON",
            // "2. name": "Tesco PLC",
            // "3. type": "Equity",
            // "4. region": "United Kingdom",
            // "5. marketOpen": "08:00",
            // "6. marketClose": "16:30",
            // "7. timezone": "UTC+01",
            // "8. currency": "GBX",
            // "9. matchScore": "0.7273"
        // },
        // {
            // "1. symbol": "TSCDF",
            // "2. name": "Tesco plc",
            // "3. type": "Equity",
            // "4. region": "United States",
            // "5. marketOpen": "09:30",
            // "6. marketClose": "16:00",
            // "7. timezone": "UTC-04",
            // "8. currency": "USD",
            // "9. matchScore": "0.7143"
        // },
        // {
            // "1. symbol": "TSCDY",
            // "2. name": "Tesco plc",
            // "3. type": "Equity",
            // "4. region": "United States",
            // "5. marketOpen": "09:30",
            // "6. marketClose": "16:00",
            // "7. timezone": "UTC-04",
            // "8. currency": "USD",
            // "9. matchScore": "0.7143"
        // },
        // {
            // "1. symbol": "TCO2.FRK",
            // "2. name": "TESCO PLC ADR/1 LS-05",
            // "3. type": "Equity",
            // "4. region": "Frankfurt",
            // "5. marketOpen": "08:00",
            // "6. marketClose": "20:00",
            // "7. timezone": "UTC+02",
            // "8. currency": "EUR",
            // "9. matchScore": "0.5455"
        // },
        // {
            // "1. symbol": "TCO0.FRK",
            // "2. name": "TESCO PLC LS-0633333",
            // "3. type": "Equity",
            // "4. region": "Frankfurt",
            // "5. marketOpen": "08:00",
            // "6. marketClose": "20:00",
            // "7. timezone": "UTC+02",
            // "8. currency": "EUR",
            // "9. matchScore": "0.5455"
        // }
    // ]
	const fetchDt=async function(){
		const response=await axios.get(surl);
		await console.log(response.data);
		await setStknm(response.data["bestMatches"][0]["1. symbol"]);
		await setPname(response.data["bestMatches"][0]["2. name"]);
		return;
	}
	
	
	const fetchName=async function(){ 
		try{
			
			await fetchDt();
			await fetchData();
			return;
		}
		catch(error)
		{
			await setPname("Error In Fetching Data: No");
			await console.error('Error fetching Data:', error);
			return;
		}
	}
	
	
	    // "Global Quote": {
        // "01. symbol": "IBM",
        // "02. open": "147.8900",
        // "03. high": "149.2250",
        // "04. low": "147.8500",
        // "05. price": "148.9700",
        // "06. volume": "4597249",
        // "07. latest trading day": "2023-11-06",
        // "08. previous close": "147.9000",
        // "09. change": "1.0700",
        // "10. change percent": "0.7235%"
		// }
		
	const fetchDt2=async function(){
		const response=await axios.get(url);
		await console.log(response.data);
		await setResp(response.data["Global Quote"]["10. change percent"]);//gets stock information
		await setInc(Number(response.data["Global Quote"]["2. name"]));
		await setSprice(Number(response.data["Global Quote"]["05. price"]))
		return;
	}

	const fetchData=async function(){
		try{
				await fetchDt2();
				return;
			}
		catch(error){
				await console.error('Error Fetching Data:', error);
				return;
			}	
	}
    return (
        <div className="lg:px-20 px-8 md:text-base text-xs lg:text-base">
            <h1 className="text-[rgb(212,195,87)] mt-4 mb-2 text-sm lg:text-lg font-bold">INVEST</h1>
            <div>
                <input className={`rounded p-1 mt-4 mb-4 lg:w-1/2 searstock`} type="text" name="stockname" placeholder="Enter The Stock Name" value={stockName} onChange={changeStockName} onKeyPress={upstknm} required autoFocus/>
            </div>
            <div>
			{/*<p className="text-center leading-relaxed">{surl}</p>
					<p className="text-center leading-relaxed">{searn}</p>
					<p className="text-center leading-relaxed">{stknm}</p>
					<p className="text-center leading-relaxed">{url}</p>
					<p className="text-center leading-relaxed">{inc}</p>
<p className="text-center leading-relaxed">{resp}</p>*/}
					{pname !=='' && (<div className={`StkDisp ${"rounded-lg flex justify-center items-center"}`}>
						<img className={'arrImg'} src={inc>=0?GreenArrow:RedArrow} style={{width:`1em`,height:`auto`,}}/>
						<div className={'outDisp'}>
						<div className={'inDisp'} style={{color: inc>=0? 'green':'red',display:'block',}}>&nbsp;{resp}&nbsp;{pname}&nbsp;{sprice}-Change&nbsp;{inc}$&nbsp;</div>
						</div>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => buyShares()}>BUY</button>
					</div>)}
            </div>
        </div>
    );
}