import '../FormMobail.scss';
import React, { Component } from "react";

const FormSignin = () =>{
    return (
      <section className="mobail">
          <div className="container">
				    <h3>Star it!<br/>From quality to loyalty!</h3> 
                     
          <form action="action_page.php">
                <label for="email" id="email">Your Email:</label>
                    <input type="email" placeholder="enter email" name="email" required/><br/>
                <label for="psw" id="psw">Your Password:</label> 
                    <input type="password" placeholder="enter password" name="psw" required/>
                <hr/> 
            <button type="submit">Sign in</button>
            <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>
          </form>  
				</div>
      </section>
    );
}

export default FormSignin; 

