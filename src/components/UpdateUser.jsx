import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateUser = () => {

    const { id } = useParams()
    const [userData, setuserData] = useState(null);


    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getbyid/' + id);
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setuserData(data);
    }

    useEffect(() => { //useEffect by default 2 baar chlta h 
        fetchUserData()

    }, []);

    const submitForm = (values) => {
        console.log(values);
    }



    return (
        <div>
            <div className="col-md-4 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h2 className="my-3">User update form</h2>

                        {
                            userData!==null ?
                        <Formik
                            initialValues={userData}
                            onSubmit={submitForm}
                        >
                            {(signupform) => (
                                <form onSubmit={signupform.handleSubmit} >

                                    <label>Name</label>

                                    <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.touched.name && signupform.errors.name}</span> {/*touched islie bcoz jab submit kre tbhi wo batae ki short h pehle se type krte saathi naa bataye */}
                                    <input id="name" onChange={signupform.handleChange} value={signupform.values.name} type="text" className='form-control mb-3' />

                                    <label>Email</label>
                                    <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.touched.email && signupform.errors.email}</span>
                                    <input id="email" onChange={signupform.handleChange} value={signupform.values.email} type="text" className='form-control mb-3' />


                                    <label>Password</label>
                                    <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.touched.password && signupform.errors.password}</span>
                                    <input id="password" onChange={signupform.handleChange} value={signupform.values.password} type="password" className='form-control mb-3' />

                                    <label>Confirm Password</label>
                                    <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.errors.confirm}</span>
                                    <input id="confirm" onChange={signupform.handleChange} value={signupform.values.confirm} type="password" className='form-control mb-3' />

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            )}
                        </Formik>
                        :
                        <h1>Loading...</h1>
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser