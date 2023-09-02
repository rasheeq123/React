import React from 'react'

const Linkedin_post = () => {
  return (
    <>
  <div className=" text-align-center d-flex justify-content-center align-items-center vh-100 bg-body-secondary">
  <div className="card card-post ">
    <div className="p-3">
        <header className=''>
        <div className='d-flex flex-row mb-3'>
        <img className='img-header-post' src="https://i.pinimg.com/736x/3c/a9/95/3ca995e6cff4cf02fea047d9035173c3.jpg" alt="" />
        <h6>Rasheeq Zehra </h6>
        <h6 className='text-muted mx-2'> (She/Her)<i className="bi bi-dot"></i>You</h6>
        <p><i className=" bi bi-three-dots text-end text-muted "></i></p>
        </div>
        <p className='text-muted mx-5 p-designation-post'><i class="bi bi-arrow-right-square-fill text-info "></i> Imminent MERN Stack Developer || GDSC'22 <i class="bi bi-arrow-left-square-fill text-info"></i></p>

        <p className='text-muted mx-5 p-designation-post-II-line'> 1D<i class="bi bi-dot"></i> Edited<i class="bi bi-dot"></i><i class="bi bi-globe-central-south-asia"></i></p>
        </header>
     <div>
        <p>Celebrating 1 year at <b className='text-primary'>GDSC BBDITM</b></p>
        <img className='img-gdsc mx-5' src="https://arifian853.github.io/GDSC-movie-info/img/GDSC%20Vertical.svg" alt="" />
     </div> 
     
     <p className='text-center' style={{marginTop:'6em', fontSize:'14px'}}><b className='text-muted'>Celebrating a Work Anniversary</b> </p>
     <p className="mt-5 text-muted" style={{fontSize: '12px'}}> <i class="bi bi-hand-thumbs-up-fill text-primary "></i><i class="bi bi-lightbulb-fill text-warning"></i> PANKAJ JENA and 14 others</p>
     <hr style={{marginTop:'-3px'}}/>
     <div className='d-flex flex-row mb-3'>
        <p>Like</p>
        <p>Comment</p>
        <p>Repost</p>
        <p>Share</p>

     </div>
     
    </div>
  </div>
  </div>
</>

  )
}

export default Linkedin_post