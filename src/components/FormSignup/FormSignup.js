import '../FormMobail.scss';
import React, { Component } from "react";

const FormSignup = () =>{
    return (
      <section className="mobail">
          <div className="container">
				    <h3>Star it!<br></br>From quality to loyalty!</h3>  
          <form>
            <label for="name" id="naim">Your Name:</label> 
              <input type="text" placeholder="enter name"/>
            <label for="surname" id="surname">Your Surname:</label> 
              <input type="text" placeholder="enter surname"/>
                <br></br>
                <label for="email" id="email">Your Email:</label>
              <input type="email" placeholder="enter email"></input>
                 <br></br>        
            <label for="psw" id="psw">Your Password:</label> 
              <input type="password" placeholder="enter password"/>
                <br></br>    
                <label for="psw-repeat" id="psw">Repeat Password:</label> 
              <input type="password" placeholder="repeat password"/>
                <br></br>    
            <button type="submit">Sign up</button>
            
          </form>  
				</div>
      </section>
    );
}

export default FormSignup; 

