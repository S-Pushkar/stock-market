import React,{ createContext, useContext, useState } from 'react';

const StocksContext = createContext();

export const StocksProvider = ({ children }) => {
  const [userStocks, setUserStocks] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  const buyStock = (stock) => {
    setUserStocks((prevStocks) => [...prevStocks, stock]);
  };

  const sellStock = (stock) => {
    setUserStocks((prevStocks) => prevStocks.filter((s) => s !== stock));
  };

  const setStocks = (stocks) => {
    setUserStocks(stocks);
  };
  const setEmail = (email) => {
    setUserEmail(email);
  };

  return (
    <StocksContext.Provider value={{ userStocks, setStocks,buyStock,sellStock, userEmail, setEmail  }}>
      {children}
    </StocksContext.Provider>
  );
};

export const useStocks = () => {
  const context = useContext(StocksContext);
  if (!context) {
    throw new Error('useStocks must be used within a StocksProvider');
  }
  return context;
};
