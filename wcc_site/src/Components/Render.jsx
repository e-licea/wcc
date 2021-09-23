import React from 'react'
import { Route } from 'react-router'
import Contact from './Contact'
import Home from './Home'


//Components
import TheLab from './TheLab'
import ToggleDarkMode from './utils/ToggleDarkMode'

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
