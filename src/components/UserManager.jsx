import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const UserManager = () => {

    const [userList, setuserList] = useState([])  // jaise hi dataaaega usko strore kr lenge or jis component me chahiye hoga waha use kr lemge or agr wo update ho rha to bhi dikha denge 

  const getUserData= async ()=>{
    const res=await fetch('http://localhost:5000/user/getall')
    console.log(res.status);
    const data= await res.json(); // data fetch krne ke lie
    console.table(data);
    setuserList(data);
  }

  useEffect(() => {
    // when component opens
  
    getUserData();
    
  }, [])
  
const deleteUser=async (id)=>{
    console.log(id);
    //fetch
    const res=await fetch('http://localhost:5000/user/delete/'+ id, { 
        method: 'DELETE',
        
 });
 console.log(res.status);
 if(res.status===200){
    getUserData();
    toast.success('User Deleted Successfully');


 }
};


  return (
    <div className="vh-100 bg-body-secondary">
        <div className="container py-4">
            <h1 className="text-center">User Manager</h1>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>SNo.</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((user, index)=>(
                            <tr>
                                <td>{index+1}</td>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>
                                    <Link to={"/updateuser/"+ user._id} className="btn btn-primary">Edit</Link>
                                </td>
                                <td>
                                    <button 
                                    onClick={()=>{deleteUser(user._id)}}
                                    className="btn btn-danger">Delete</button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserManager