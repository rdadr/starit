import '../FormSign.scss';
import React, { Component } from "react";

const FormSignup = () =>{
    return (
      <section className="mobail">
          <div className="container">
				    <h3>Star it!<br/>From quality to loyalty!</h3>  
              <h4>Register<br></br>Please fill in this form to create an account</h4>
                  <hr/>
          <form action="action_page.php">
            <label for="username" id="naim">Your Name:</label> 
              <input type="text" placeholder="enter name"/>
                 <br/>
                <label for="email" id="email">Your Email:</label>
              <input type="email" placeholder="enter email"></input>
                 <br/>       
            <label for="psw" id="psw">Your Password:</label> 
              <input type="password" placeholder="enter password"/>
                <br/>   
                <label for="psw-repeat" id="psw">Repeat Password:</label> 
              <input type="password" placeholder="repeat password"/>
                  <hr/>
                  <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
            <button type="submit">Sign up</button>

            <div className="signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>

          </form>  
				</div>
      </section>
    );
}

export default FormSignup; 

