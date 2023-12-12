
import { useParams } from "react-router-dom"


const User = () => {
    const {userid }= useParams();
  return (
    <div className="bg-gray-600 font-bold p-2 flex justify-center m-6 items-center text-white">User: {userid}</div>
  )
}

export default User