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
        <i className="bi bi-telephone-fill  " style="color:rgb(179, 157, 32)"></i>
        
        <p className="p1-contact">+91123456789 <br/>+91876456789 </p>
        
      </div> 
      <div className="item item-2 item-border">
        <p className="fs-5 p-contact"><b>ADDRESS</b></p>
        <i className="bi bi-geo-alt-fill  fs-5" style="color:rgb(179, 157, 32)"></i>
        
        <p className="p1-contact">123-B,Tej Complex,Hazratganj</p>
      </div> 
      <div className="item item-3">
        <p className="fs-5 p-contact"><b>EMAIL</b></p>
        <i className="bi bi-envelope-at-fill fs-5" style="color:rgb(179, 157, 32)"></i>
        <p className="p1-contact">zehrarasheeq@gmail.com </p>
        
      </div>
    </div>
    
    <form>
        <label for="name" style=" color:rgb(162, 143, 30); font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;  font-size: 1.1em";>Full Name</label>
        <input className="form-control form-control-lg my-input myinput-card" type="name">

    <label for="mail" style=" color:rgb(179, 157, 32); font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;  font-size: 1.1em";>Email</label>
    <input className="form-control form-control-lg my-input myinput-card" type="email"/>

    <label for="phone" style=" color:rgb(179, 157, 32); font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;  font-size: 1.1em";>Phone Number</label>
    <input className="form-control form-control-lg my-input myinput-card" type="tel"/>

    <label for="message" style="color:rgb(179, 157, 32)";> Message</label>
        <textarea className="form-control form-control-lg my-input myinput-card" rows = "3" cols = "23" name = "description"  >
          </textarea>
          <br><br>
         <button className="raise button-card">Submit</button>
    </form>
      </div>
    </div>
</div>

  )
}

export default Contact_form