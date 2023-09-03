import React, { useState } from 'react'

const Chatting=()=>{
    const [todochat, setTodochat] = useState([]);
     
    const addNewchat=(e)=>{
        if(e.code=='Enter'){
        console.log(e.target.value);
        setTodochat([...todochat, e.target.value]);
        console.log([...todochat, e.target.value]);
    }
}


  return (
    <div className="container">
        <h1 className='text-center my-5'> Chat</h1>
            <div className="card">
            <div className="card-header">
                {todochat.map((todo)=>{return <div className='d-flex justify-content-between mb-4'>
                    <p>{todo}</p>
                    <p className="text-primary display-date"><i class="bi bi-check2-all"></i></p>
                    </div>})}
                
            </div>
            <div className="card-body"> 
            <input type="text"className='form-control' onKeyDown={ addNewchat }  />
            </div>
            </div>
    </div>
  )
}



export default Chatting