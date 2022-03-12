import React from 'react'
import "./Navbar.scss"
import Logo from "../../Assets/images/quick.svg"
import { NavLink } from 'react-router-dom'

export function Navbar(props) {
    
    return (
        <>
             <div className='navbar'>
				<div className='navbar__container container__header'>
					<div className='navbar__icon'>
						<NavLink to='#'><img src={Logo} alt='logo.svg' /></NavLink>
                            <nav className='navbar__items'>
                                <li className='navbar__item'>
                                    <NavLink className='navbar__item--link' to='/'>Home</NavLink>
                                </li>
                                <li className='navbar__item'>
                                    <NavLink className='navbar__item--link' to='/profile'>Profile</NavLink>
                                </li>
                                <li className='navbar__item'>
                                    <NavLink className='navbar__item--link' to='/clients'>Clients</NavLink>
                                </li>
                                <li className='navbar__item'>
                                    <NavLink className='navbar__item--link' to='/stock'>Stock</NavLink>
                                </li>
                            </nav>  
					</div>

					<div className='navbar__profil'>
						<p className='navbar__profil--text'>Профиль</p>
					</div>
                    <input className="input" id="check" onClick={()=>{
                        document.querySelector('.modal').classList.toggle('open-modal')
                    }} type="checkbox"/>
                    <label className="label" htmlFor="check">
                        <span className="hamburger-menu"></span>
                    </label>
				</div>
                
                <div className="modal" >
                <div className="container__header">
                     
                        <div className='modal--navbar__items'>
                        <nav>
                                    <li className='navbar__item'>
                                        <NavLink className='navbar__item--link' to='/'>Home</NavLink>
                                    </li>
                                    <li className='navbar__item'>
                                        <NavLink className='navbar__item--link' to='/profile'>Profile</NavLink>
                                    </li>
                                    <li className='navbar__item'>
                                        <NavLink className='navbar__item--link' to='/clients'>Clients</NavLink>
                                    </li>
                                    <li className='navbar__item'>
                                        <NavLink className='navbar__item--link' to='/stock'>Stock</NavLink>
                                    </li>
                        </nav>
                        </div>
                    
                </div>

                </div>
			</div>
             
        </>
    )
}
