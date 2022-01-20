import React, { useContext } from 'react'
import { UserContext } from '../App';
import Read from './read'

function Post() {
    const context = useContext(UserContext)
     console.log(context,'posy');
    return (
        <div>
          <h1>Post Component...........</h1>
            <Read />
        </div>
    )
}

export default Post
