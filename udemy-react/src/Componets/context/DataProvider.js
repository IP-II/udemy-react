import React, { createContext, useState } from 'react'

export const DataContext = createContext()
function DataProvider({children}) {
    const [userData, setUserData] = useState({});


  return (
    <DataContext.Provider value={[userData, setUserData]}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;
