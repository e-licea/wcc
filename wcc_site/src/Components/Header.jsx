import React from 'react';
import { Link } from 'react-router-dom';
//imported from /img
import logo from '../img/wcc-reg-text.svg';
//imported components
import JumboSlides from './JumboSlides';


export default function Header() {


    return (
        <div className = 'Header'>
            
            <div className = 'Navigation'>
                
                <Link className = 'img' to = '/services'>
                    <img src={logo} alt="Windy City Code Logo"/>
                </Link>
                <nav>
                <Link className = 'nav-link' to = '/services'>Services</Link>             
                <Link className = 'nav-link' to = '/the_lab'>theLab</Link>
                <Link className = 'nav-link' to = '/contact'>Contact</Link>
                {/* <Link className = 'nav-link' to = '/Shop'>Home</Link> */}

                </nav>
            </div>
            
        </div>
    )
}
