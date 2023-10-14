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
            <p className="m-8 text-lg">
                This is a project created by Priyanshu Sachan, Pushkar P Urs and
                Pushkar S. We are students currently studying in PES University.
            </p>
        </>
    );
}