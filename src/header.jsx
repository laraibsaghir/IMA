import './header.css'
import { useState, button } from 'react';



function Header() {
 

    return (
      
        <div class="header">
    <a href="#default" class="logo">IMA</a>
    <div class="header-right">
      <a class="home" href="#home">Home</a>
      <a href="#about"class="space">About</a>
      <a href="#services"class="space">Services</a>
      <a href="#team" class="space">Team</a>
      <a href="#contact" class="space">Contact Us</a>
      <a href="#signin" class="space">Sign In</a>
      <a href="#signup" class="space">Sign Up</a>
    </div>
   
  </div>

  
    )
  }
  
  export default Header