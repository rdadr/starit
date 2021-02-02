import '../FormMobail.scss';
import React, { Component } from "react";

const FormName = () =>{
    return (
      <section className="mobail">
          <div className="container">
				    <h3>Star it!<br></br>From quality to loyalty!</h3>  
          <form>
            <label for="name" id="naim">Your Name:</label> 
              <input type="text" placeholder="enter name"/>
                    <br></br> 
            <label for="psw" id="psw">Your Password:</label> 
              <input type="password" placeholder="enter password"/>
                    <br></br>        
            <button type="submit">Submit</button>
            
          </form>  
				</div>
      </section>
    );
}

export default FormName; 

