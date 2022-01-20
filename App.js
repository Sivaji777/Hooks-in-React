import React, { createContext } from 'react'
import { Link } from 'react-router-dom'
import Lifecycle from './Components/LifeCycle'
import Delete from './crud/delete'
export const UserContext=React.createContext()
function App() {

  const ObjectData={
    name:'sivaji',
    age:'23',
    disignation:'ASEj'
  
  }

  return (
    <div>
   <h1 style={{color:'red'}} >useContext hook</h1>
         <UserContext.Provider value={ObjectData} >
          <Delete/>
         </UserContext.Provider>
    </div>
  )
}

export default App
