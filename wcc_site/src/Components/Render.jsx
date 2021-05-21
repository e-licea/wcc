import React from 'react'
import { Route } from 'react-router'
import Contact from './Contact'


//Components
import Services from './Services'
import TheLab from './TheLab'

export default function Render() {
    return (
        <div id = 'Render'>
            <Route exact path = '/services' component = {Services}/>
            <Route path = '/the_lab' component = {TheLab}/>

            <Contact/>
        </div>
    )
}
