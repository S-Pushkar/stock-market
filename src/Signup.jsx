import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from './App';
import { Link, useNavigate } from 'react-router-dom';
export default function Signup() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
    const navigate = useNavigate();
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        password1:'',
        password2:'',
    })
    
    const [errorMessage,setErrorMessage]=useState('');

    const updateForm=(e)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        });
    }

    const submitForm=async (e)=>{
        e.preventDefault();
        if (formData.password1!=formData.password2){
            setErrorMessage('password do not match pls reenter');
            return;
        }

        try{
            // console.log('before fetch');
            console.log(formData);
            const connection= await fetch("http://localhost:3000/signup",{
                method:'POST',
                headers:{'Content-Type': 'application/json',},
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password1,
                }),
            });
            // console.log('after fetch');
            const data=await connection.json()

            if (connection.ok) {
                console.log(data.message)
                navigate('/');
                // window.location.reload();
            } else {
                setErrorMessage(data.message);
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
        
    }
    
    useEffect(() => {
		setLog('Signup')
        setCurrentPage('Signup');
    }, [currentPage]);

    return (

        <div className="flex flex-col items-center px-8 lg:px-20 md:text-base text-xs lg:text-base">
            <h1 className="text-[rgb(212,195,87)] mt-4 mb-2 text-sm lg:text-lg font-bold">{log.toUpperCase()}</h1>
            <div className="lg:w-1/3 sm:w-1/2 bg-[#646464] rounded-xl mb-8 p-8">
                <form onSubmit={submitForm}>
                        
                        <p className="text-red-500">{errorMessage}</p>
                        
                    <div>
                        <div className="mr-2 text-xs lg:text-lg">
                                Name : 
                        </div>
                        <input className="rounded p-1 mt-4 mb-4 lg:w-1/2" type="text" name="name" placeholder="Username" required autoFocus onChange={updateForm}/>
                    </div>
                    <div>
                        <div className="mr-2 text-xs lg:text-lg" >
                            Email : 
                        </div>
                        <input className="rounded p-1 mt-4 mb-4 lg:w-1/2" type="email" name="email" placeholder="example@gmail.com" required onChange={updateForm}/>
                    </div>
					<div>
                        <div className="mr-2 text-xs lg:text-lg">
                            Password : 
                        </div>
                        <input className="rounded p-1 mt-4 mb-4 lg:w-1/2" type="password" name="password1"  required onChange={updateForm}/>
                    </div>
					<div>
                        <div className="mr-2 text-xs lg:text-lg">
                            Confirm Password : 
                        </div>
                        <input className="rounded p-1 mt-4 mb-4 lg:w-1/2" type="password" name="password2"  required onChange={updateForm}/>
                    </div>
					<div>
                    <button className="bg-[rgb(227,223,223)] m-2 shadow-md text-black px-2 py-1 hover:bg-gray" type="submit">Submit</button>
                    <button className="bg-[rgb(227,223,223)] m-2 shadow-md text-black px-2 py-1 hover:bg-gray" type="reset">Reset</button>
					</div>
					<div>
						<h4 style={{ fontSize: '16px' }}>Already have an account?</h4>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<h4 style={{ fontSize: '16px' }}>Click&nbsp;</h4>
						<Link to={{pathname: '/log-in', state: {log: 'Login'}}} style={{ fontSize: '16px', color: 'black'  }}>Here</Link>
						<h4 style={{ fontSize: '16px' }}>&nbsp;to login</h4>
					</div>
                </form>
            </div>
        </div>
    );
}