import React, { useContext, useEffect } from "react";
import {PageContext} from './App';

export default function Home() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
    useEffect(() => {
        setCurrentPage('Home');        
    }, [currentPage]);    
    return (
        <>
            <h1 className="text-[rgb(77,126,212)]">HOME</h1>
        </>
    );
}