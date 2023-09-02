import React from 'react'

const Linkedin_post = () => {
  return (
    <>
  <div className=" text-align-center d-flex justify-content-center align-items-center vh-100 bg-body-secondary">
  <div className="card card-post ">
    <div className="p-3">
        <header className='d-flex flex-row mb-3'>
            <img className='img-header-post' src="https://i.pinimg.com/736x/3c/a9/95/3ca995e6cff4cf02fea047d9035173c3.jpg" alt="" />
        <h6>Rasheeq Zehra </h6>
        <h6 className='text-muted mx-2'> (She/Her)<i className="bi bi-dot"></i>You</h6>
        <p><i className=" bi bi-three-dots text-end text-muted "></i></p>

        </header>
      
      <label>Email</label>
      <input type="text" className="form-control mt-2 mb-4" />
      <label> Password</label>
      <input type="password" className="form-control mt-2 mb-4" />
      <button className="btn btn-danger w-100 mt-4">Submit</button>
    </div>
  </div>
  </div>
</>

  )
}

export default Linkedin_post