import React, { useContext, useEffect } from "react";
import {PageContext} from './App';

export default function About() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
    useEffect(() => {
        setCurrentPage('About');
    }, [currentPage]);
    return (
        <>
            <h1 className="text-[rgb(77,126,212)]">ABOUT</h1>
        </>
    );
}