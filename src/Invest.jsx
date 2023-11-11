import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from './App';
import axios from 'axios';
import GreenArrow from "./GreenArrow.svg";
import RedArrow from "./RedArrow.svg";
import './App.css';

export default function Invest() {
    const { log, setLog, currentPage, setCurrentPage } = useContext(PageContext);
	 useEffect(() => {
        setCurrentPage('Invest');        
    }, [currentPage]);
	//Stock Name
	let stockName=["Microsoft Corp","Adani Enterprises","Apple Inc","Alphabet Inc","Indusind Bank", "Indian Oil Corp","Amazon.com","NVIDIA Corp"]
	//Stock symbol
	let stockSymbol=["MSFT","ADANIENT","AAPL","GOOGL","INDUSINDBK","IOC","AMZN","NVDA"]
	//stock price
	let stockPrice=["369.5700","2209.00","186.4000","132.59","149985","98.25","143.56","483.35"]
	//stock increase decreae since previous close
	let stockChange=["8.9800","-5.65","3.9900","2.3500","-7.50","-4.70","2.96","13.85"]
	//stock percentage
	let stockPerc=["2.4897 %","0.26 %","2.1874 %","1.8044 %","0.50 %","4.57 %","2.11 %","2.95 %"]
	
    return (
        <div className="lg:px-20 px-8 md:text-base text-xs lg:text-base">
            <h1 className="text-[rgb(212,195,87)] mt-4 mb-2 text-sm lg:text-lg font-bold">INVEST</h1>
			{/*} <div>
                <input className={`rounded p-1 mt-4 mb-4 lg:w-1/2 searstock`} type="text" name="stockname" placeholder="Enter The Stock Name" value={stockName} onChange={changeStockName} onKeyPress={upstknm} required autoFocus/>
			</div>*/}
			<br/>
            <div className={"Enclosure"}>
					<div className={`StkDisp ${"rounded-lg flex justify-center items-center"}`}>
						<img className={'arrImg'} src={stockChange[0]>=0?GreenArrow:RedArrow} style={{width:`1em`,height:`auto`,}}/>
						<div className={'outDisp'}>
						<div className={'inDisp'} style={{color: stockChange[0]>=0? 'green':'red',display:'block',}}>&nbsp;{stockPerc[0]}&nbsp;{stockSymbol[0]}&nbsp;{stockName[0]}&nbsp; at &nbsp;{stockPrice[0]}$&nbsp;Change&nbsp;{stockChange[0]}$&nbsp;</div>
						</div>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => buyShares()}>BUY</button>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => sellShares()}>SELL</button>
					</div>
					<br/>
					<div className={`StkDisp ${"rounded-lg flex justify-center items-center"}`}>
						<img className={'arrImg'} src={stockChange[1]>=0?GreenArrow:RedArrow} style={{width:`1em`,height:`auto`,}}/>
						<div className={'outDisp'}>
						<div className={'inDisp'} style={{color: stockChange[1]>=0? 'green':'red',display:'block',}}>&nbsp;{stockPerc[1]}&nbsp;{stockSymbol[1]}&nbsp;{stockName[1]}&nbsp; at &nbsp;{stockPrice[1]}₹&nbsp;Change&nbsp;{stockChange[1]}₹&nbsp;</div>
						</div>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => buyShares()}>BUY</button>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => sellShares()}>SELL</button>
					</div>
					<br/>
					<div className={`StkDisp ${"rounded-lg flex justify-center items-center"}`}>
						<img className={'arrImg'} src={stockChange[2]>=0?GreenArrow:RedArrow} style={{width:`1em`,height:`auto`,}}/>
						<div className={'outDisp'}>
						<div className={'inDisp'} style={{color: stockChange[2]>=0? 'green':'red',display:'block',}}>&nbsp;{stockPerc[2]}&nbsp;{stockSymbol[2]}&nbsp;{stockName[2]}&nbsp; at &nbsp;{stockPrice[2]}$&nbsp;Change&nbsp;{stockChange[2]}$&nbsp;</div>
						</div>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => buyShares()}>BUY</button>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => sellShares()}>SELL</button>
					</div>
					<br/>
					<div className={`StkDisp ${"rounded-lg flex justify-center items-center"}`}>
						<img className={'arrImg'} src={stockChange[3]>=0?GreenArrow:RedArrow} style={{width:`1em`,height:`auto`,}}/>
						<div className={'outDisp'}>
						<div className={'inDisp'} style={{color: stockChange[3]>=0? 'green':'red',display:'block',}}>&nbsp;{stockPerc[3]}&nbsp;{stockSymbol[3]}&nbsp;{stockName[3]}&nbsp; at &nbsp;{stockPrice[3]}$&nbsp;Change&nbsp;{stockChange[3]}$&nbsp;</div>
						</div>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => buyShares()}>BUY</button>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => sellShares()}>SELL</button>
					</div>
					<br/>
					<div className={`StkDisp ${"rounded-lg flex justify-center items-center"}`}>
						<img className={'arrImg'} src={stockChange[4]>=0?GreenArrow:RedArrow} style={{width:`1em`,height:`auto`,}}/>
						<div className={'outDisp'}>
						<div className={'inDisp'} style={{color: stockChange[4]>=0? 'green':'red',display:'block',}}>&nbsp;{stockPerc[4]}&nbsp;{stockSymbol[4]}&nbsp;{stockName[4]}&nbsp; at &nbsp;{stockPrice[4]}₹&nbsp;Change&nbsp;{stockChange[4]}₹&nbsp;</div>
						</div>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => buyShares()}>BUY</button>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => sellShares()}>SELL</button>
					</div>
					<br/>
					<div className={`StkDisp ${"rounded-lg flex justify-center items-center"}`}>
						<img className={'arrImg'} src={stockChange[5]>=0?GreenArrow:RedArrow} style={{width:`1em`,height:`auto`,}}/>
						<div className={'outDisp'}>
						<div className={'inDisp'} style={{color: stockChange[5]>=0? 'green':'red',display:'block',}}>&nbsp;{stockPerc[5]}&nbsp;{stockSymbol[5]}&nbsp;{stockName[5]}&nbsp; at &nbsp;{stockPrice[5]}₹&nbsp;Change&nbsp;{stockChange[5]}₹&nbsp;</div>
						</div>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => buyShares()}>BUY</button>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => sellShares()}>SELL</button>
					</div>
					<br/>
					<div className={`StkDisp ${"rounded-lg flex justify-center items-center"}`}>
						<img className={'arrImg'} src={stockChange[6]>=0?GreenArrow:RedArrow} style={{width:`1em`,height:`auto`,}}/>
						<div className={'outDisp'}>
						<div className={'inDisp'} style={{color: stockChange[6]>=0? 'green':'red',display:'block',}}>&nbsp;{stockPerc[6]}&nbsp;{stockSymbol[6]}&nbsp;{stockName[6]}&nbsp; at &nbsp;{stockPrice[6]}$&nbsp;Change&nbsp;{stockChange[6]}$&nbsp;</div>
						</div>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => buyShares()}>BUY</button>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => sellShares()}>SELL</button>
					</div>
					<br/>
					<div className={`StkDisp ${"rounded-lg flex justify-center items-center"}`}>
						<img className={'arrImg'} src={stockChange[7]>=0?GreenArrow:RedArrow} style={{width:`1em`,height:`auto`,}}/>
						<div className={'outDisp'}>
						<div className={'inDisp'} style={{color: stockChange[7]>=0? 'green':'red',display:'block',}}>&nbsp;{stockPerc[7]}&nbsp;{stockSymbol[7]}&nbsp;{stockName[7]}&nbsp; at &nbsp;{stockPrice[7]}$&nbsp;Change&nbsp;{stockChange[7]}$&nbsp;</div>
						</div>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => buyShares()}>BUY</button>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => sellShares()}>SELL</button>
					</div>
            </div>
        </div>
    );
}