import React, { useContext, useEffect } from 'react';
import { PageContext } from './App';

export default function Profile() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
    if(log != 'Logged in') {        // If the user is already logged in, we'll display user's details or else we'll give error.
        return (
            <>
                <p className="mt-4">Please log in to access your profile.</p>
            </>
        );
    }
    useEffect(() => {
        setCurrentPage('Profile');    
        setLog('Profile'); 
    }, [currentPage]);    
    return (
        <div className="lg:px-20 px-8 md:text-base text-xs lg:text-base">
            <h1 className="text-[rgb(212,195,87)] mt-4 mb-2 text-sm lg:text-lg font-bold">{log.toUpperCase()}</h1>
        </div>
    );
}