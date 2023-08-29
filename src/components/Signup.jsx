import React from 'react'

const Signup = () => {
  return (

      <div className="main">
        
        <h2><b><center/>SIGN UP </b> </h2>
        <br/>

        <form>
        <label for="name" style={{fontFamily:'serif'  , fontSsize: '1.1em'}}>Full Name</label>
            <input className="myinput" type="name"/>

        <label for="mail" style={{fontFamily:'serif'  , fontSsize: '1.1em'}}>Email</label>
        <input className="myinput" type="email"/>

        <label for="phone" style={{fontFamily:'serif'  , fontSsize: '1.1em'}}>Phone Number</label>
        <input className="myinput" type="tel"/>

        <label for="dob" style={{fontFamily:'serif'  , fontSsize: '1.1em'}}>Date of Birth</label>
        <input className="myinput" type="date"/>
       
        
        <label for="password" style={{fontFamily:'serif'  , fontSsize: '1.1em'}}>Password<label>
        <input className="myinput" type="password"/>

        <label for="password" style={{fontFamily:'serif'  , fontSsize: '1.1em'}}> Confirm Password</label>
        <input className="myinput" type="password"/>
       
        <input type="checkbox" id="rememberme"/>
        <label for="rememberme" style={{fontFamily:'serif'  , fontSsize: '1.1em', fontWeight: 'bold', color: 'rgb(91, 87, 87)'}}>I agree with all Terms & Condition and Privacy Policy</label>
       
        
        <button class="mybtn">Sign Up</button>
        <p id="not"> Already have an Account? <a href="signin.html" >Sign In Now</a> </p>

       
        
    </form>

</div>
  )
}

