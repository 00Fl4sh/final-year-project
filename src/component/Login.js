import React from 'react'

export default function Login() {
  return (
    
        <div class="container" id="content01">
            <div class="img-slider"> 
                <h2>HELLO SUNSHINE</h2>
                <p>WE'RE HERE TO HELP YOU</p>
                    <img src="{{ url_for('static', filename ='img/hiibrain.jpg') }}" alt="MentalHealth"/>
            </div>
        <div class="content">
            <h2>Get Started</h2>
            <p>Don't have an account ?  <a href="/signup" id="sign-up">Sign up</a></p>
            <main>
            <form id="form" class="form" method="post" action="/login_validation">
                <label for="email" id="elabel">Email</label> 
                <input type="email" id="eemail" placeholder="sakshirasal28@gmail.com" class="form-control" name="email" autocomplete="off" required/>
                <label for="password" id="plabel">Password</label>
                <input type="password" name="password" class="form-control" id="lpassword" required/>
                <button type="submit" className="btn btn-primary btn-block btn-lg" id="btn1" value="Login">Login </button>
            </form>
        </main>
        </div>
        </div>

    
    
  )
}