import { useFormik } from 'formik';
import React from 'react'

const Login = () => {
  const loginform= useFormik ({
    initialValues: {
        
        email:'',
        password:''
    },
    onSubmit: (values)=> {
        console.log(values);
        //send values to backend
    }
});


  return (
    <div className="py-5 vh-100 bg-body-secondary">
            <div className="col-md-4 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h2 className="my-3">SignUp form</h2>

                        <form onSubmit={loginform.handleSubmit} >

                        
                        <label>Email</label>
                        <input id="email" onChange={loginform.handleChange} value={loginform.values.email} type="email" className='form-control mb-3' />
                        <label>Password</label>
                        <input id="password" onChange={loginform.handleChange} value={loginform.values.password} type="password" className='form-control mb-3' />

                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login