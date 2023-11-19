import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from './App';
import { Link,useNavigate } from 'react-router-dom';
import { useStocks } from './StockContext';
export default function Login() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
    const navigate=useNavigate();
    const {setStocks,setEmail}=useStocks();
    const [formdata,setFormData]=useState({
        email:'',
        password:'',
    })

    const [errorMessage,setErrorMessage]=useState('')

    const handleForm=(e)=>{
        setFormData({
            ...formdata,
            [e.target.name]:e.target.value,
        })
    }

    const submitForm=async (e)=>{
        e.preventDefault();


        try{
            console.log(formdata)

            const connection=await fetch("http://localhost:3000/login",{
                method:'POST',
                headers:{'Content-Type': 'application/json',},
                body: JSON.stringify({
                    email: formdata.email,
                    password: formdata.password,
                }),
            })

            const data=await connection.json();
         
            if(connection.ok){
                console.log(data.message);
                setStocks(data.stocks);
                setEmail(formdata.email);
                navigate('/');
            }
            else{
                setErrorMessage(data.message)
            }
        }
        catch(err){
            console.log('error during signup',err)
        }

    }

    




    useEffect(() => {
        setCurrentPage('Login');
		setLog('Login')
    }, [currentPage]);
    return (
        <div className="flex flex-col items-center px-8 lg:px-20 md:text-base text-xs lg:text-base">
            <h1 className="text-[rgb(212,195,87)] mt-4 mb-2 text-sm lg:text-lg font-bold">{log.toUpperCase()}</h1>
            <div className="lg:w-1/3 sm:w-1/2 bg-[#646464] rounded-xl mb-8 p-8">
                <form onSubmit={submitForm}>

                <p className="text-red-500">{errorMessage}</p>
                    <div>
                        <div className="mr-2 text-xs lg:text-lg">
                            Email : 
                        </div>
                        <input className="rounded p-1 mt-4 mb-8 lg:w-1/2" type="email" name="email" placeholder="example@gmail.com" required autoFocus onChange={handleForm}/>
                    </div>
					<div>
                        <div className="mr-2 text-xs lg:text-lg">
                            Password : 
                        </div>
                        <input className="rounded p-1 mt-4 mb-8 lg:w-1/2" type="password" name="password"  required onChange={handleForm}/>
                    </div>
					<div>
						<button className="bg-[rgb(227,223,223)] m-2 shadow-md text-black px-2 py-1 hover:bg-gray" type="submit" >Submit</button>
						<button className="bg-[rgb(227,223,223)] m-2 shadow-md text-black px-2 py-1 hover:bg-gray" type="reset">Clear</button>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<h4 style={{ fontSize: '16px' }}>Click&nbsp;</h4>
						<Link to={{ pathname: '/sign-up', state: { log: 'Signup' } }} style={{ fontSize: '16px', color: 'black' }}>Here</Link>
						<h4 style={{ fontSize: '16px' }}>&nbsp;to signup</h4>
					</div>
                </form>
            </div>
        </div>
    );
}