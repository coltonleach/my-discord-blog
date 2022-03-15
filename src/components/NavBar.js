import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

function NavBar() {
	return (
		<div className="navbar">
			<ul className="icons">
				<NavLink activeClassName="active" exact to="/">
					<li id="home">H</li><span className='tooltip-text'>home</span>
				</NavLink>
				<div className="divider"></div>
				<NavLink activeClassName="active" to="/blog">
					<li id="blog">B</li><span className='tooltip-text'>blog</span>
				</NavLink>
			</ul>
		</div>
	)
}

export default NavBar
