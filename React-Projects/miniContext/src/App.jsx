import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContextProvider from "./Context/UsercontextProvider.jsx"

function App() {
 

  return (
    <>
    <UserContextProvider>
    <div className="bg-gray-500 p-4 h-screen">
     <Login/>
     <Profile/>
     </div>
     </UserContextProvider>
    </>
  )
}

export default App
