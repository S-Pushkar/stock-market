import React, { useContext, useEffect } from "react";
import {PageContext} from './App';

export default function Portfolio() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
    useEffect(() => {
        setCurrentPage('Portfolio');
    }, [currentPage]);
    return (
        <>
            <h1 className="text-[rgb(212,195,87)] text-sm lg:text-lg font-bold">PORTFOLIO</h1>
        </>
    );
}