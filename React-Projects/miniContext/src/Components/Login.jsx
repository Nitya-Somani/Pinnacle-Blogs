import  { useContext, useState } from 'react';
import UserContextProvider from '../Context/UserContext'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContextProvider)

  const handleLogin = (e) => {
   e.preventDefault();
   setUser({username,password});
   
  };

  return (
    <div className="flex items-center justify-center  mt-20">
      <div className="bg-gray-800 w-96 p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-white">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-700 text-white border rounded-md focus:outline-none"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-white">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-700 text-white border rounded-md focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 focus:outline-none"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
