import React from 'react'
import { Link } from 'react-router-dom'
import { navigation } from '../Pages/Home/MainNavigator'

export default function SlimNav() {
    return (
        <div id = 'SlimNav'>
            <ul>
            <li>
                <Link to = '/'>Home</Link>
            </li>
                {
                    navigation.map(navLink=>{
                        return(
                            <li>
                                <Link to = {navLink.path}>{navLink.link}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
