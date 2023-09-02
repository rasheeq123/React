import React, { useState } from 'react'

const StateManagement = () => {
    let count=2;


   const [likes, setlikes] = useState(0)

  return (
    <div className='container'>
        <h1 className='text-center'>State Management</h1>
        <hr />
        <button className='btn btn-primary' onClick={()=>{count++; console.log(count);}}>Add Count</button>

        <h1>{count}</h1>
        <button className='btn btn-success mt-4' onClick={()=>{setlikes(likes+1)}}>{likes} Likes</button>
    </div>
  )
}

export default StateManagement