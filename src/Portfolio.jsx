import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from './App';
import { useStocks } from './StockContext';
import './App.css';

export default function Portfolio() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
    const {userStocks,userEmail}=useStocks();
    const [errorMessage,setErrorMessage]=useState('')

    useEffect(() => {
        setCurrentPage('Portfolio');        
    }, [currentPage]); 
    
    
    const finishTrade = async (userStocks,userEmail) => {
        try {
          // Make a POST request to your backend to finish the trade
          const response = await fetch('http://localhost:3000/finish-trade', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:userEmail,
                stock:userStocks,
            }),
          });
          const data=await response.json()
          if (response.ok) {
            console.log(data.message);
            setErrorMessage(data.message);
          } else {
            setErrorMessage(data.message)
          }
        } catch (error) {
          console.error('Error during finish trade:', error);
        }
    }

    return (
        
        <div className="lg:px-20 px-8 md:text-base text-xs lg:text-base">
            <p className="text-red-500">{errorMessage}</p>
            <h1 className="text-[rgb(212,195,87)] mt-4 mb-2 text-sm lg:text-lg font-bold">PORTFOLIO</h1>
            <div>
                <h2 className='text-blue-500 text-xl'>Your Stocks for Email id: {userEmail}</h2>
                {/* <p>{userStocks}</p> */}
                <ul>
                  {userStocks.map((stock, index) => ( <li key={index} className='aboutp-2'>{stock}</li> ))}
                </ul>
                <button onClick={() => finishTrade(userStocks,userEmail)}>Finish Trade</button>
            </div>
        
        </div>
    );
}