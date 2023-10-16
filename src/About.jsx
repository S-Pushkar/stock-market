import React, { useContext, useEffect } from "react";
import { PageContext } from './App';

export default function About() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
    useEffect(() => {
        setCurrentPage('About');
    }, [currentPage]);
    return (
        <div className="lg:px-20 px-8 md:text-base text-xs lg:text-base">
            <h1 className="text-[rgb(212,195,87)] mt-4 mb-2 text-sm lg:text-lg font-bold">ABOUT</h1>
            <p className="m-8 text-lg">
                This is a project created by Priyanshu Sachan, Pushkar P Urs and
                Pushkar S. We are students currently studying in PES University.
            </p>
        </div>
    );
}