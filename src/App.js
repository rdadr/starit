import React from 'react';
import './App.scss';
import Home from './components/Home/Home';

function App() {
	const header = [
	];

	const navLinks = [
		{
			title: 'home',
			href:'#home'
		},
		{
			title: 'SERVICE',
			href: '#servise'
		},
		{
			title: 'DASHBOARD',
			href: '#dashbord'
		},
		{
			title: 'sign up',
			href: '#signup'
		}
	];
	

  return (
   <>
		<Home  title='Service for collecting and analyzing customer feedback' 
			logos={header}
			links={navLinks} 
		/>
   </>
  );
}

export default App;
