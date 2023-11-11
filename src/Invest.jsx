import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from './App';
import axios from 'axios';
import GreenArrow from "./GreenArrow.svg";
import RedArrow from "./RedArrow.svg";
import './App.css';

export default function Invest() {
    const { log, setLog, currentPage, setCurrentPage } = useContext(PageContext);
	
	//Stock Name
	let stockName=["Microsoft Corp","Adani Enterprises","Apple Inc","Alphabet Inc","Indusind Bank"]
	//Stock symbol
	let stockSymbol=["MSFT","ADANIENT","AAPL","GOOGL","INDUSINDBK"]
	//stock price
	let stockPrice=["369.5700","2209.00","186.4000","132.59","149985"]
	//stock increase decreae since previous close
	let stockChange=["8.9800","-5.65","3.9900","2.3500","-7.50"]
	//stock percentage
	let stockPerc=["2.4897 %","0.26 %","2.1874 %","1.8044 %","0.50 %"]
	
    return (
        <div className="lg:px-20 px-8 md:text-base text-xs lg:text-base">
            <h1 className="text-[rgb(212,195,87)] mt-4 mb-2 text-sm lg:text-lg font-bold">INVEST</h1>
			{/*} <div>
                <input className={`rounded p-1 mt-4 mb-4 lg:w-1/2 searstock`} type="text" name="stockname" placeholder="Enter The Stock Name" value={stockName} onChange={changeStockName} onKeyPress={upstknm} required autoFocus/>
			</div>*/}
            <div>
					<div className={`StkDisp ${"rounded-lg flex justify-center items-center"}`}>
						<img className={'arrImg'} src={stockChange[0]>=0?GreenArrow:RedArrow} style={{width:`1em`,height:`auto`,}}/>
						<div className={'outDisp'}>
						<div className={'inDisp'} style={{color: stockChange[0]>=0? 'green':'red',display:'block',}}>&nbsp;{stockPerc[0]}&nbsp;{stockSymbol[0]}&nbsp;{stockName[0]}&nbsp; at &nbsp;{stockPrice[0]}&nbsp;$&nbsp;Change&nbsp;{stockChange[0]}&nbsp;$&nbsp;</div>
						</div>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => buyShares()}>BUY</button>
					</div>
					<br/>
					<div className={`StkDisp ${"rounded-lg flex justify-center items-center"}`}>
						<img className={'arrImg'} src={stockChange[1]>=0?GreenArrow:RedArrow} style={{width:`1em`,height:`auto`,}}/>
						<div className={'outDisp'}>
						<div className={'inDisp'} style={{color: stockChange[1]>=0? 'green':'red',display:'block',}}>&nbsp;{stockPerc[1]}&nbsp;{stockSymbol[1]}&nbsp;{stockName[1]}&nbsp; at &nbsp;{stockPrice[1]}&nbsp;₹&nbsp;Change&nbsp;{stockChange[1]}&nbsp;₹&nbsp;</div>
						</div>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => buyShares()}>BUY</button>
					</div>
					<br/>
					<div className={`StkDisp ${"rounded-lg flex justify-center items-center"}`}>
						<img className={'arrImg'} src={stockChange[2]>=0?GreenArrow:RedArrow} style={{width:`1em`,height:`auto`,}}/>
						<div className={'outDisp'}>
						<div className={'inDisp'} style={{color: stockChange[2]>=0? 'green':'red',display:'block',}}>&nbsp;{stockPerc[2]}&nbsp;{stockSymbol[2]}&nbsp;{stockName[2]}&nbsp; at &nbsp;{stockPrice[2]}&nbsp;$&nbsp;Change&nbsp;{stockChange[2]}&nbsp;$&nbsp;</div>
						</div>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => buyShares()}>BUY</button>
					</div>
					<br/>
					<div className={`StkDisp ${"rounded-lg flex justify-center items-center"}`}>
						<img className={'arrImg'} src={stockChange[3]>=0?GreenArrow:RedArrow} style={{width:`1em`,height:`auto`,}}/>
						<div className={'outDisp'}>
						<div className={'inDisp'} style={{color: stockChange[3]>=0? 'green':'red',display:'block',}}>&nbsp;{stockPerc[3]}&nbsp;{stockSymbol[3]}&nbsp;{stockName[3]}&nbsp; at &nbsp;{stockPrice[3]}&nbsp;$&nbsp;Change&nbsp;{stockChange[3]}&nbsp;$&nbsp;</div>
						</div>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => buyShares()}>BUY</button>
					</div>
					<br/>
					<div className={`StkDisp ${"rounded-lg flex justify-center items-center"}`}>
						<img className={'arrImg'} src={stockChange[4]>=0?GreenArrow:RedArrow} style={{width:`1em`,height:`auto`,}}/>
						<div className={'outDisp'}>
						<div className={'inDisp'} style={{color: stockChange[4]>=0? 'green':'red',display:'block',}}>&nbsp;{stockPerc[4]}&nbsp;{stockSymbol[4]}&nbsp;{stockName[4]}&nbsp; at &nbsp;{stockPrice[4]}&nbsp;₹&nbsp;Change&nbsp;{stockChange[4]}&nbsp;₹&nbsp;</div>
						</div>
						<button className="bg-[rgb(227,223,223)] m-3 text-black px-1 py-1 hover:bg-gray" onClick={() => buyShares()}>BUY</button>
					</div>
            </div>
        </div>
    );
}