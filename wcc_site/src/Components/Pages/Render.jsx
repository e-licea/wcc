import React from 'react'
import { Route } from 'react-router'
import Contact from './Contact/Contact'
import Home from './Home/Home'


//Components
import TheLab from './TheLab/TheLab'
import ToggleDarkMode from '../Utils/ToggleDarkMode'

//This component holds only routes and components that are always rendered on the viewport.

export default function Render() {
    return (
        <div id = 'Render'>
            <ToggleDarkMode/>
            <Route exact path = '/' component = {Home}/>
            <Route path = '/the_lab' component = {TheLab}/>
            <Contact/>
        </div>
    )
}
