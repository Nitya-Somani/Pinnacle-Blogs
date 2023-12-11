import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordGenerated = useCallback(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let ps = "";

    if (allowNum) chars += "0123456789";
    if (allowChar) chars += "!@#$%^&*()-_=+[]{}|;:,.<>?/`~";

    for (let i = 1; i <= length; i++) {
      const charVar = Math.floor(Math.random() * chars.length + 1);

      ps += chars.charAt(charVar);

     
    }
   
    setPassword(ps);
    

  }, [length, allowNum, allowChar, setPassword]);


  useEffect(()=>{
     passwordGenerated();
  

  },[length,allowNum,allowChar,passwordGenerated])

const setClipboard = useRef();

function handleClipboard(){
  setClipboard.current?.select();
  setClipboard.current?.setSelectionRange(0, 999);
  window.navigator.clipboard.writeText(Password);
}

  return (
    <div className="min-h-screen bg-slate-700 flex justify-center items-center">
      <div className="absolute top-14 text-white">
        <h1 className="font-bold text-3xl text-center mb-10">
          Password Generator
        </h1>
        <div className="bg-slate-400 text-white rounded-full shadow-xl flex items-center">
        <input
  type="text"
  defaultValue={Password}
  className="rounded-l-full py-3 px-8 flex-grow outline-none text-black"
  placeholder="Generated Password"
  ref ={setClipboard}
/>


          <button className="px-4 py-3 font-bold bg-orange-500 rounded-r-full text-white cursor-pointer"
          onClick={handleClipboard}
          >
            Copy
          </button>
        </div>
        <div className="m-4 bg-orange-500 rounded-full p-4 flex items-center">
          <label className="text-white mr-4">Select range: {length}</label>
          <input type="range" 
          className="cusrsor-pointer"
          min={0} max={30}  value={length}
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <div className="flex items-center ml-4">
            <input
              type="checkbox"
              className="mx-2 w-4 h-4  text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={()=>{setAllowNum((prev)=>!prev)}}
            />
            <label className="text-white">Numbers</label>
          </div>
          <div className="flex items-center ml-4">
            <input
              type="checkbox"
              className="mx-2 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={()=>{setAllowChar((prev)=> !prev)}}
            />
            <label className="text-white">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
