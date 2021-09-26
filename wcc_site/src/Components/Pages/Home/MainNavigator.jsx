import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import instagram from '../../../img/icons/instagram.png'
import facebook from '../../../img/icons/facebook.png'

import images from '../../images';

//Hooks 
import useWindowSize from '../../Hooks/UseWindowSize';
import Assistant from '../../Widgets/Assistant';


export default function MainNavigator() {
    const viewport = useWindowSize();

    useEffect(() => {
         
    }, [viewport])

    return (
        <div id = 'MainNavigator'>
            {/* <div id="social-media">
                <a>
                        <img src={instagram} alt="" />
                </a>
                <a>
                        <img src={facebook} alt="" />
                </a>
            </div> */}
            <ul id = 'navigation-links-grid'>
                {
                    navigation.map(navLink=>{
                        return(
                            <li>
                                <img src={navLink.img} alt="" />
                                <Link to = {navLink.path}>{navLink.link}</Link>
                            </li>
                        )
                    })
                }
                <Assistant/>
            </ul>
        </div>
    )
}


export const navigation = [
    {
        id: 1,
        link: 'Web Apps',
        img: images.winterChiHedge,
        path: '/web_apps'
    },
    {
        id: 2,
        link: 'Micro Services',
        img: images.millChicago,
        path: '/micro_services'
    },
    {
        id: 3,
        link: 'SEO',
        img: images.diamondChi,
        path: '/seo'
    },
    {
        id: 4,
        link: 'The Lab',
        img: images.chiTrump,
        path: '/the_lab'
    },
    {
        id: 5,
        link: 'Project Gallery',
        img: images.winterChiHedge,
        path: '/project_gallery'
    },

]