import { useFormik } from 'formik'
import React from 'react'

const Signup_Sir = () => {

    const signupform= useFormik({
        initialValues: {
            name:'',
            email:'',
            password:''
        },
        onSubmit: (values,{resetForm} )=> {
            console.log(values);
            resetForm();
            
            //send values to backend
        }
    });

  return (
    <div>
        <div className="py-5 vh-100 bg-body-secondary">
            <div className="col-md-4 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h2 className="my-3">SignUp form</h2>

                        <form onSubmit={signupform.handleSubmit} >

                        <label>Name</label>
                        <input id="name" onChange={signupform.handleChange} value={signupform.values.name} type="text" className='form-control mb-3' />
                        <label>Email</label>
                        <input id="email" onChange={signupform.handleChange} value={signupform.values.email} type="email" className='form-control mb-3' />
                        <label>Password</label>
                        <input id="password" onChange={signupform.handleChange} value={signupform.values.password} type="password" className='form-control mb-3' />

                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup_Sir