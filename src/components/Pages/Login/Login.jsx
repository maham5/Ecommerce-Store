import React, { useState } from 'react'

function Login() {
    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
   

      const fetchLogin = async (e) => {
        e.preventDefault();}
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md flex">
                {/* Login Section */}
                <div className="w-1/2 pr-4 border-r">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={fetchLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username:
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                         <div className="flex items-center justify-between">
                            <a href='/'
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Login
                            </a>
                        </div>
                    </form>
                </div>

                {/* Register Section */}
                <div className="w-1/2 pl-4">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                    <p className="mb-6 text-center">Don't have an account yet?</p>
                    <div className="flex items-center justify-center">
                        <a
                            href="/register" // Your register page route
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}


export default Login