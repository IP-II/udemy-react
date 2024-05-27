import React, { useContext } from 'react'
import { DataContext } from '../Componets/context/DataProvider';

const Loginhome = () => {
  const [userData, setUserData] = useContext(DataContext

  )
  return (
    <div>
      Log in Home
      <h1>Welcome {userData.name}</h1>
    </div>
  )
}

export default Loginhome;
