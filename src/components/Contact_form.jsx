import React from 'react'

const Contact_form = () => {
  return (
    
    <div className=" text-align-center d-flex justify-content-center align-items-center vh-100 bg-body-secondary bodyDesignContact" >
    <div className="card card-design ">
      <div className="container w-75 ">
    <div className="row">
       <h2 className="text-center site-title h2-card "><b>Get in touch with us!</b></h2>       
     </div>

    <div className= "container mx-auto contact site-title container-element">
      <div className="item item-1 align-items-center item-border">
        <p className="fs-5 p-contact"><b>PHONE</b> </p>
        <i className="bi bi-telephone-fill  " style={{color:'rgb(179, 157, 32)'}}></i>
        
        <p className="p1-contact">+91123456789 <br/>+91876456789 </p>
        
      </div> 
      <div className="item item-2 item-border">
        <p className="fs-5 p-contact"><b>ADDRESS</b></p>
        <i className="bi bi-geo-alt-fill  fs-5" style={{color:'rgb(179, 157, 32)'}}></i>
        
        <p className="p1-contact">123-B,Tej Complex,Hazratganj</p>
      </div> 
      <div className="item item-3">
        <p className="fs-5 p-contact"><b>EMAIL</b></p>
        <i className="bi bi-envelope-at-fill fs-5" style={{color:'rgb(179, 157, 32)'}}></i>
        <p className="p1-contact">zehrarasheeq@gmail.com </p>
        
      </div>
    </div>
    
    <form>
        <label for="name" style={{color:'rgb(162, 143, 30)', fontFamily: "Gill Sans, GillSans MT, Calibri, Trebuchet MS, sansSserif",  fontSsize: '1.1em'}}>Full Name</label>
        <input className="form-control form-control-lg my-input myinput-card" type="name"/>

    <label for="mail" style={{ color:'rgb(179, 157, 32)', fontFamily: "GillSans, Gill Sans MT, Calibri, Trebuchet MS, sansSerif", fontSsize: '1.1em'}}>Email</label>
    <input className="form-control form-control-lg my-input myinput-card" type="email"/>

    <label for="phone" style={{color:'rgb(179, 157, 32)', fontFfamily: "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sansSserif",  fontSsize: '1.1em'}}>Phone Number</label>
    <input className="form-control form-control-lg my-input myinput-card" type="tel"/>

    <label for="message" style={{color:'rgb(179, 157, 32)'}}> Message</label>
        <textarea className="form-control form-control-lg my-input myinput-card" rows = "3" cols = "23" name = "description"  >
          </textarea>
          <br/><br/>
         <button className="raise button-card">Submit</button>
    </form>
      </div>
    </div>
</div>

  )
}
{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/scrollreveal"></script>
    <script>
      ScrollReveal().reveal('.site-title',{
         delay:200, 
        origin: 'top',
        distance: '100px'   ,
        duration: 500 ,
        scale:1.5, 
        
      });
    </script>
    
    
    
    
    <script src="https://cdn.jsdelivr.net/npm/vanilla-tilt@1.8.1/dist/vanilla-tilt.min.js"></script>
    <script>
      VanillaTilt.init( document.querySelectorAll ('.card'),{
        max:3, //animation ke lie time ki kitti time limit tk hoga
        speed:100,
        
        
      });
      </script> */}

export default Contact_form