import React from 'react';
import { Route } from 'react-router';
import Contact from './Contact/ContactForm';
import Home from './Home/Home';


//Components
import TheLab from './TheLab/TheLab';
import WebApps from './WebApps/WebApps';
import ProjectGallery from './ProjectGallery/ProjectGallery';
import MicroServices from './MicroServices/MicroServices';
import ToggleDarkMode from '../Utils/ToggleDarkMode';
import SEO from './SEO/SEO';

//This component holds only routes and components that are always rendered on the viewport.

export default function Render() {
    return (
        <div id = 'Render'>
            <ToggleDarkMode/>
            <Route exact path = '/' component = {Home}/>
            <Route path = '/the_lab' component = {TheLab}/>
            <Route path = '/web_apps' component = {WebApps}/>
            <Route path = '/project_gallery' component = {ProjectGallery}/>
            <Route path = '/micro_services' component = {MicroServices}/>
            <Route path = '/seo' component = {SEO}/>
            <Contact/>
        </div>
    )
}
