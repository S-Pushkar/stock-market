import React, { useContext, useEffect } from "react";
import {PageContext} from './App';

export default function Signup() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
    useEffect(() => {
        setCurrentPage('Signup');
    }, [currentPage]);
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[rgb(77,126,212)]">{log}</h1>
            <div className="w-1/2 bg-[#646464] rounded-xl mt-8 mb-8 p-8">
                <form>
                    <div>
                        <div className="mr-2 text-xl">
                                Name : 
                            </div>
                            <input className="rounded p-1 mt-4 mb-8" type="text" name="name" required autoFocus />
                    </div>
                    <div>
                        <div className="mr-2 text-xl">
                            Email : 
                        </div>
                        <input className="rounded p-1 mt-4 mb-8" type="email" name="email" required />
                    </div>
                    <button className="bg-[rgb(227,223,223)] m-2 shadow-md text-black w-1/4 px-4 py-2" type="submit">Submit</button>
                    <button className="bg-[rgb(227,223,223)] m-2 shadow-md text-black w-1/4 px-4 py-2" type="reset">Reset</button>
                </form>
            </div>
        </div>
    );
}