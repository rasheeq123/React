import React from 'react'

const Chatting = () => {
  return (
    <div className="container">
        <h1 className='text-center my-5'> Chat</h1>
            <div className="card">
            <div className="card-header">
                
            </div>
            <div className="card-body"> 
            <input type="text"className='form-control' onKeyDown={ addNewchat }  />
            </div>
            </div>
    </div>
  )
}

export default Chatting