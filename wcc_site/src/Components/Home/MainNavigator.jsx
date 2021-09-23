import React from 'react'
import { Link } from 'react-router-dom'
import instagram from '../../img/icons/instagram.png'
import facebook from '../../img/icons/facebook.png'

import images from '../images';

export default function MainNavigator() {
    return (
        <div id = 'MainNavigator'>
            <div id="social-media">
                <a>
                        <img src={instagram} alt="" />
                </a>
                <a>
                        <img src={facebook} alt="" />
                </a>
            </div>
            <ul id = 'navigation-links-grid'>
                <li>
                    <img src={images.winterChiHedge} alt="" />
                    <Link to = '/web_apps'>Web Apps</Link>
                </li>
                <li>
                    <img src={images.diamondChi} alt="" />
                    <Link to = '/micro_services'>Micro Services</Link>
                </li>
                <li>
                    <img src={images.millChicago} alt="" />
                    <Link to = '/seo'>SEO</Link>
                </li>
                <li>
                    <img src={images.chiTrump} alt="" />
                    <Link to = '/the_lab'>The Lab</Link></li>
                <li>
                    <img src={images.millChicago} alt="" />
                    <Link to = '/gallery'>Project Gallery</Link>
                </li>
            </ul>
        </div>
    )
}
