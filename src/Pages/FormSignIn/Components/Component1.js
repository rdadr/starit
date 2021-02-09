import React from 'react'
import { Link } from 'react-router-dom'
import '../../FormSign.scss'

export default function Router() {
    return (
      <section className="forms">

        <div>
        <Link to={'/Page1'}>Page1</Link><br/>
        <Link to={'/page2'}>Page2</Link><br/>
        <Link to={'/signup'}>SignUp</Link><br/>
        <Link to={'/'}>Home</Link>
        </div>

          <div className="container">
				    <h3>Star it!<br/>From quality to loyalty!</h3> 
                     
          <form action="action_page.php">
                <label for="username" id="naim">Your Name:</label> 
                    <input type="text" placeholder="enter name" />
                 <br/>
                <label for="email" id="email">Your Email:</label>
                    <input type="email" placeholder="enter email" name="email" required />
                <br/>
                <label for="psw" id="psw">Your Password:</label> 
                    <input type="password" placeholder="enter password" name="psw" required />
                <hr/> 
            <button type="submit">Sign in</button>
            <label>
                <input type="checkbox" name="remember" checked="checked"  /> Remember me</label>
          </form>  
		</div>
      </section>
    );
}

