import React, { useContext, useEffect } from "react";
import {PageContext} from './App';

export default function Signup() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
    useEffect(() => {
        setCurrentPage('Signup');
    }, [currentPage]);
    return (
        <>
            <h1 className="text-[rgb(77,126,212)]">{log}</h1>
        </>
    );
}