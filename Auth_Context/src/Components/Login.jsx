import React, { useContext } from 'react'
import { useState } from 'react'
import { UserloginContext } from "../Context/UseLoginContext"
import { useNavigate } from "react-router-dom"
function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { setUser, setIsLogin } = useContext(UserloginContext);
    const navigate = useNavigate();
    const checkForm = (e) => {
        e.preventDefault()
        const addedUser = { username: "Shivam", Password: "12345" }
        if (username == addedUser.username && password == addedUser.Password) {
            setIsLogin(true)
            setUser(addedUser.username)
            navigate("/")
        } else {
            setIsLogin(false)
            setUser("Not Logeed In")

        }
    }
    return (
        <div className=" flex items-center justify-center mt-12">
            <div className="h-80 w-3/5 border-2 border-solid  rounded-xl border-gray-300">
                <div>
                    <label for="price" class="block text-sm/6 font-medium text-white text-left ml-12">Login</label>
                    <div class="mt-4 ml-12 mr-12">
                        <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                            <div class="shrink-0 mr text-base text-gray-400 select-none sm:text-sm/6"></div>
                            <input id="price" type="text" name="price" placeholder="UserName" class="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" value={username} onChange={(e) => setUsername(e.target.value)} />

                        </div>
                    </div>
                </div>


                <div>
                    <label for="price" class="block text-sm/6 font-medium text-white text-left ml-12">Password</label>
                    <div class="mt-4 ml-12 mr-12">
                        <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                            <div class="shrink-0 mr text-base text-gray-400 select-none sm:text-sm/6"></div>
                            <input id="price" type="password" name="price" placeholder="UserName" class="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" value={password} onChange={(e) => setPassword(e.target.value)} />

                        </div>
                    </div>
                </div>

                <button onClick={checkForm} className="mt-12 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Login
                </button>
            </div>

        </div>
    )
}

export default Login