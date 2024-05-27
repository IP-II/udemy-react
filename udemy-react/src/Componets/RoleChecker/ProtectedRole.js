import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import Admin from '../../Pages/Admin';
import { Outlet } from 'react-router-dom';

function ProtectedRole() {
    const [userData, setUserData] = useContext(DataContext);
console.log(userData)
   return (
    <>
        {userData?.role === 'admin' ? <Admin/> : <Outlet/>}
    </>
   )
 
}

export default ProtectedRole
