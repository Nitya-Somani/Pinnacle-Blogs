import  {useContext} from 'react'
import UserContextProvider from '../Context/UserContext'

const Profile = () => {
 
    const {user} = useContext(UserContextProvider)
    
    if (!user) return <div className='text-xl font-semibold mb-2 flex flex-col items-center mt-6'>Please Login</div>

    
  return (
    <div className="flex flex-col items-center mt-8  ">
      <h2 className="text-3xl font-bold mb-4">Profile</h2>
     
        <div className="bg-gray-200 p-6 rounded-md shadow-md">
          <p className="text-xl font-semibold mb-2">Username: {user.username}</p>
         
        </div>
     
    </div>
  );
};

export default Profile;
