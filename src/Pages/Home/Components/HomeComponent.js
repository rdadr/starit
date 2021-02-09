import React from 'react'
import { Link } from 'react-router-dom'
import './HomeComponent.scss';

export default function HomeComponent() {
  return (
    <section className='home'>
    <div className='container'>
  <div className='home-header'>
    </div>

    <div>
      <Link to={'/page1'}>Page1</Link><br/>
      <Link to={'/page2'}>Page2</Link><br/>
      <Link to={'/signup'}>SignUp</Link><br/>
      <Link to={'/signin'}>SignIn</Link>
    </div>

    			<nav className='home-navigation'>
            
			</nav>
	
      </div>
		</section>

  );
}
