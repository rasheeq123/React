import React, { useEffect } from 'react'

const UserManager = () => {

  const getUserData= async ()=>{
    const res=await fetch('http://localhost:5000/user/getall')
    console.log(res.status);
  }

  useEffect(() => {
    // when component opens
  
    return () => {

      //when component closes
      alert('this component is about to close')
    }
  }, [])
  



  return (
    <div className="vh-100 bg-body-secondary">
        <div className="container py-4">
            <h1 className="text-center">User Manager</h1>
        </div>
    </div>
  )
}

export default UserManager