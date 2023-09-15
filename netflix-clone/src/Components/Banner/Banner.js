// import React, { useEffect } from 'react'
// import axios from 'axios '
import './Banner.css'
import NavBar from '../NavBar/NavBar'
function Banner() {
    
    return (
        <div 
        
         className='banner'>
            {/* <div className='NavBar'>
            <NavBar/>
            </div> */}
            <div className="navbar" >
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
            <button className='signup-btn'>Signup</button>
            {/* <input type="text" /> */}
            {/* <button>Sign In</button> */}
            

            
        </div>


            <div className='content' >
                <h1 className='title'>Unlimited movies, TV shows and more </h1>
                <div className='banner_buttons' >
                    <h2 className='description'>Watch anywhere. Cancel anytime.
                </h2>
                <h2 className='description'>Ready to watch? Enter your email to create or restart your membership.</h2>
                
                <form className="centered-form" method="post">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <button className="get-started-button" type="submit">Get Started</button>
          </form>    
                    {/* <button className='button' >Play</button>
                    <button className='button' >My list</button> */}
                </div>
               
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner