import React from 'react'
import { UserContext } from '../App'

function Update() {
    return (
        <div>
         <h1>Update component...........</h1>
        <UserContext.Consumer>
        {
            data => {
                   return   <div>
                   <h1>{data.name}</h1>
                   <h1>{data.age}</h1>
                   <h1>{data.disignation}</h1>
</div>
            }
        }
        </UserContext.Consumer>
        </div>
    )
}

export default Update
