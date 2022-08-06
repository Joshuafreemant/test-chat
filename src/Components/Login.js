import React, { Fragment, useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate,useParams } from "react-router-dom";
import { useCookies } from 'react-cookie';

function Login() {
    let navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user']);

    const [username, setUsername] = useState('')

    function saveUser(e) {
        e.preventDefault();

        if(username !==''){
            setCookie('Name', username, { path: '/' });
            let exist = JSON.parse(localStorage.getItem("chat"));
            if (exist == null) {
                exist = [];
            }
            let userChats = {
                
                'user': username ,
                'chat': [],
            }
            exist.push(userChats);
            exist.map((item, i) => {
                item.id = i + 1;
            });
            localStorage.setItem("chat", JSON.stringify(exist));
            navigate('/chat')
        }else{
            alert('Field Cannot be empty')
        }
        
    }
    return (
        <div>
            <div className="bg-purple-600 h-screen flex justify-center items-center w-full">
                <form action="" className="w-full flex-col flex justify-center items-center">
                    <h1 className="text-white text-2xl tracking-wider font-bold text-left">Login to your Chat Account</h1>
                    <div className="flex flex-col xl:w-3/12 w-full mt-6">
                        <label htmlFor="username" className="text-white"> Username:</label>
                        <input
                            type="text"
                            className="p-2 focus:outline-none mt-4"
                            value={username}
                            onChange={e => setUsername(e.target.value)}

                        />

                        <button
                            onClick={saveUser}
                            className="xl:w-4/12 hover:text-white hover:bg-purple-200 w-full mt-4 bg-white p-2 rounded text-purple-600 font-bold">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login