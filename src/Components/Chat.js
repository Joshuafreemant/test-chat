import React, { Fragment, useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useCookies } from 'react-cookie';

function Login() {


    let navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user']);
    const [chats, setChat] = useState('')
    let localChat = JSON.parse(localStorage.getItem('chat'))

    const [visible, setVisible] = useState(25);


    function saveChat(e) {
        let localData = localStorage.getItem('chat');

        e.preventDefault();

        if (chats !== '') {

            let newList = JSON.parse(localData)
            console.log(newList)
            let index = newList.find(item => item.user === cookies.Name)
            // newList.splice(index.chat, 1, chats);
            let text = index.chat
            text.push(chats)
            console.log(text)

            localStorage.setItem('chat', JSON.stringify(newList));

            
    
        } else {
            alert('Field Cannot be empty')
        }

    }

    function showMore(e) {
        e.preventDefault()
        setVisible((prevValue) => prevValue + 25)
    }



    return (
        <div>
            <div className="bg-purple-600 h-screen flex justify-center items-center w-full">
                <form action="" className="w-full flex-col flex justify-center items-center">
                    <h1 className="text-white text-2xl tracking-wider font-bold text-left">Chat Account {cookies.Name}</h1>
                    <div className="xl:w-4/12 w-full bg-white relative mt-8 screen overflow-y-scroll">

                        {localChat?.slice(0, visible).map((item) => (
                            <div className="px-6 w-full">
                                {

                                    item.chat.length === 0 ? (
                                        ''
                                    ) : (
                                        item.user === cookies.Name ?

                                            <div className='flex w-full  items-end justify-end'>
                                                <div className=" bg-purple-600 p-6 rounded-xl mt-4 flex gap-6 items-center w-8/12">
                                                    <h5 className='font-bold text-xl text-white'>{item.user}:</h5>

                                                    <p className='text-white text-sm'>
                                                        {item.chat}
                                                    </p>
                                                </div>

                                            </div> :

                                            <div className='flex w-full  items-end justify-start'>
                                                <div className=" bg-purple-600 p-6 rounded-xl mt-4 flex gap-6 items-center w-8/12">
                                                    <h5 className='font-bold text-xl text-white'>{item.user}:</h5>

                                                    <p className='text-white text-sm'>
                                                        {item.chat}
                                                    </p>
                                                </div>

                                            </div>
                                    )
                                
                             
                        }

                            </div>

                        ))}

                        {!localChat?.length || localChat?.length <= visible ? ('') : (
                        <div className="w-full flex items-center justify-center my-20">
                            <button
                                onClick={showMore}
                                className='border border-purple-600 text-purple-600 font-semibold p-3 text-sm rounded-lg '>Load More</button>
                        </div>
                    )}

                        <div className="absolute bottom-0 bg-purple-400 p-2 flex mt-6 w-full gap-3">
                            <input
                                type="text"
                                className="w-9/12 p-3 rounded-xl focus:outline-none mt-4"
                                value={chats}
                                onChange={e => setChat(e.target.value)}

                            />

                            <button
                                onClick={saveChat}
                                className="xl:w-3/12 text-white bg-purple-500 w-full mt-4  p-3 rounded-xl  font-bold">Submit</button>
                        </div>
                    </div>

                </form>
            </div >
        </div >
    )
}

export default Login