import React from 'react'

export default function Logout() {
  return (
    <div>
        <div class="img-slider"> 
            <h2>HELLO SUNSHINE</h2>
            <p>WE'RE HERE TO HELP YOU</p>
                <img src="{{ url_for('static', filename ='img/hiibrain.jpg') }}" alt="MentalHealth"/>
        </div>
        <div class="content">
            <h2>Get Started</h2>
            <p>Already have an account ? <a href="/login" class="item" id="login">Sign In </a></p>
            <main>
            <form method="post" class="form" action="/new_user" id="form">
                <label for="name" id="nlabel">Name</label> 
                <input type="text" id="fname" placeholder="Sakshi Rasal" name="uname" class="form-control" autocomplete="off"/> 
                <label for="email" id="elabel">Email</label> 
                <input type="email" id="eemail" placeholder="sakshirasal28@gmail.com" name="uemail" class="form-control" autocomplete="off"/> 
                <label for="password" id="plabel">Password</label> 
                <input type="password" name="upassword" id="lpassword" placeholder="sakshi@123" class="form-control"/> 
                <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn" value="signup">Sign Up </button>
            </form>
            </main>
        </div>
        </div>
    
    
    
  )
}