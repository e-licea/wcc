import React from 'react';
import { Link } from 'react-router-dom';
//imported from /img
import logo from '../img/chiweb_logo_words.svg';
//imported components
import JumboSlides from './JumboSlides';


export default function Header() {


    return (
        <div className = 'Header'>
            
            <JumboSlides/>
            <div className = 'Navigation'>
                
                <Link className = 'img' to = '/'>
                    <img src={logo} alt="Windy City Code Logo"/>
                </Link>
                <nav>
                <Link className = 'nav-link' to = '/services'>Services</Link>             
                <Link className = 'nav-link' to = '/the_lab'>theLab</Link>
                <Link className = 'nav-link' to = '/contact'>Contact</Link>
                <Link className = 'nav-link' to = '/Shop'>Home</Link>

                </nav>
            </div>
            
        </div>
    )
}
