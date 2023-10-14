import React, { useContext, useEffect } from "react";
import {PageContext} from './App';

export default function Portfolio() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
    useEffect(() => {
        setCurrentPage('Portfolio');
    }, [currentPage]);
    return (
        <>
            <h1 className="text-[rgb(77,126,212)]">PORTFOLIO</h1>
        </>
    );
}