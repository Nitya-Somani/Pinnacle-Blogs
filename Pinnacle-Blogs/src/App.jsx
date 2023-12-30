import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux'
import authServie from "../src/appwrite/auth"
import {login,logout} from "./store/AuthSlice"
import {Header,Footer} from "./components/index"

function App() {

  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authServie.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      } else{
        dispatch(logout())
      }
    }).catch((error)=>{
      throw error;
    })
    .finally(()=>{
      setLoading(false)
    })

  },[])


  return !loading ?(
    <>
   <Header/>
   <main>
    <outlet/>
   </main>
   <Footer/>
   
       </>
  ) :null
}

export default App;
