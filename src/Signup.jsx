import React, { useContext, useEffect } from "react";
import { PageContext } from './App';

export default function Signup() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
    useEffect(() => {
        setCurrentPage('Signup');
    }, [currentPage]);
    return (
        <div className="flex flex-col items-center px-8 lg:px-20 md:text-base text-xs lg:text-base">
            <h1 className="text-[rgb(212,195,87)] mt-4 mb-2 text-sm lg:text-lg font-bold">{log.toUpperCase()}</h1>
            <div className="lg:w-1/3 sm:w-1/2 bg-[#646464] rounded-xl mb-8 p-8">
                <form>
                    <div>
                        <div className="mr-2 text-xs lg:text-lg">
                                Name : 
                        </div>
                        <input className="rounded p-1 mt-4 mb-8 lg:w-1/2" type="text" name="name" placeholder="Username" required autoFocus />
                    </div>
                    <div>
                        <div className="mr-2 text-xs lg:text-lg">
                            Email : 
                        </div>
                        <input className="rounded p-1 mt-4 mb-8 lg:w-1/2" type="email" name="email" placeholder="example@gmail.com" required />
                    </div>
                    <button className="bg-[rgb(227,223,223)] m-2 shadow-md text-black px-2 py-1 hover:bg-gray" type="submit">Submit</button>
                    <button className="bg-[rgb(227,223,223)] m-2 shadow-md text-black px-2 py-1 hover:bg-gray" type="reset">Reset</button>
                </form>
            </div>
        </div>
    );
}