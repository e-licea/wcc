import React from 'react'
import SlimNav from '../../Helpers/SlimNav'
import Banner from '../../Helpers/Banner'
import images from '../../images'

export default function TheLab() {
    return (
        <div id = 'TheLab'>
            <SlimNav/>
            <Banner imgSrc = {images.millChicago} title = 'The Lab'/>

            The Lab
        </div>
    )
}
