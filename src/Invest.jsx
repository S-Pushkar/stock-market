import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from './App';
import axios from 'axios';

export default function Invest() {
    const { log, setLog, currentPage, setCurrentPage } = useContext(PageContext);
    const [stockName, setStockName] = useState(''); 
	const [stknm, setStknm]= useState('');
	const [resp, setResp]=useState('');
	const [searn,setSearn]=useState('');
	const [inc,setInc]=useState('');
    useEffect(() => {
        setCurrentPage('Invest');
    }, [currentPage]);
    const changeStockName=(e)=>{
            setStockName(e.target.value);
    };
	const upstknm =async function(e){
		if(e.key==='Enter'){
			await setSearn(stockName);
			await fetchName();
		}
	};
	//TZ0ZUENF0J4KPPOC API key
	//DVLNHBAEF8ZX4L4Z API key
	const apiKey="DVLNHBAEF8ZX4L4Z";
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
	
	const fetchName=async function(){ 
		try{
			const response=await axios.get(surl);
			console.log(response.data);
			setStknm(response.data["bestMatches"][0]["1. symbol"]);
		}
		catch(error)
		{
			setStknm("IBM");
			console.error('Error fetching Data:', error);
		}
		await fetchData();
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
		
		

	const fetchData=async function(){
		try{
				const response=await axios.get(url);
				console.log(response.data);
				setResp(response.data["Global Quote"]["10. change percent"]);//gets stock information
				setInc(Number(response.data["Global Quote"]["09. change"]));
			}
		catch(error){
				setResp("1.00%");//gets stock information
				setInc(Number("1.123"));
				console.error('Error Fetching Data:', error);
			}	
	}
    return (
        <div className="lg:px-20 px-8 md:text-base text-xs lg:text-base">
            <h1 className="text-[rgb(212,195,87)] mt-4 mb-2 text-sm lg:text-lg font-bold">INVEST</h1>
            <div>
                <input className={`rounded p-1 mt-4 mb-4 lg:w-1/2 searstock`} type="text" name="stockname" placeholder="Enter The Stock Name" value={stockName} onChange={changeStockName} onKeyPress={upstknm} required autoFocus/>
            </div>
            <div>
					<p className="text-center leading-relaxed">{surl}</p>
					<p className="text-center leading-relaxed">{searn}</p>
					<p className="text-center leading-relaxed">{stknm}</p>
					<p className="text-center leading-relaxed">{url}</p>
					<p className="text-center leading-relaxed">{inc}</p>
					<p className="text-center leading-relaxed">{resp}</p>
					
            </div>
        </div>
    );
}