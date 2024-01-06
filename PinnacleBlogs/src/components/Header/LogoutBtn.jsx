import React from 'react';
import { useDispatch } from 'react-redux';
import authService from "../../appwrite/config";
import { logout } from '../../store/authSlice';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="mt-4">
      <button
        onClick={logoutHandler}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutBtn;
