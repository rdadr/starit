import './FormMobail.scss';
import React, { Component } from "react";  

const FormMobail = () =>{
    return (
      <section className="mobail">
          <div className="container">
				    <h3>Star it!<br></br>From quality to loyalty!</h3>  
          <form>
            <label for="name" id="naim">Your Name:</label> 
              <input type="text" placeholder="enter name"/>
              <br></br> 
             
            <label for="email" id="email">Your Email:</label>
              <input type="email" placeholder="enter email">
              </input> 
              <br></br> 

            <label for="phone" id="phone">Enter your phone number:</label>
              <input type="tel" name="phone" pattern="+[0-9]" required>
              </input>
                <small>Format: +380123455789</small>
              <br></br> 

            <label for="supermarket" id="supermarket">Select a supermarket:</label>
                  <select name="supermarket" multiple size="4">
                    <option value="1">KYSHENYA</option>
                    <option value="2" selected>SILPO</option>
                    <option value="3">EPICENTR</option>
                    <option value="4">METRO</option>
                  </select> 
            <br></br> 
            
            <label>Your Massage:</label>
              <input type="textarea" rows="5"></input>
             <br></br> 

             <label for="file" id="file">Send a photo</label>
             <input type="file" accept="image/png, image/jpeg"></input>
             <br></br> 

            <button type="submit">Submit</button>
            
          </form>  
				</div>
      </section>
    );
}

export default FormMobail; 
