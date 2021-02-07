import React from 'react';
import './Home.scss'

const Home = ({title, links, logos}) => {
	const logosImages = logos.map((logoItem, i) => <img src={logoItem} alt='header-logo' className='home-header-item' key={i}/>);
	const navItems = links.map((link, i) => <a href={link.href} className='home-navigation-item' key={i}>{link.title}</a>);

	return (
		<section className='home'>
      <div className='container'>
	  <div className='home-header'>
					{logosImages}
			</div>
			<nav className='home-navigation'>
					{navItems}
			</nav>
			<h1 className='home-title'>{title}</h1>
			<a href='../FormSignin/FormSignin' className='home-link'>Sign In</a>
	
      </div>
		</section>
		
	);
};

export default Home;