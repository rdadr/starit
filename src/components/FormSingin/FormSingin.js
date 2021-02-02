import '../FormMobail.scss';
import React, { Component } from "react";

const FormSignin = () =>{
    return (
      <section className="mobail">
          <div className="container">
				    <h3>Star it!<br></br>From quality to loyalty!</h3>  
          <form>
                <label for="email" id="email">Your Email:</label>
              <input type="email" placeholder="enter email"></input>
                 <br></br>        
            <label for="psw" id="psw">Your Password:</label> 
              <input type="password" placeholder="enter password"/>
                <br></br>    
            <button type="submit">Sign in</button>
            
          </form>  
				</div>
      </section>
    );
}

export default FormSignin; 

