import React from 'react'
import Banner from '../../Helpers/Banner'
import SlimNav from '../../Helpers/SlimNav'
import images from '../../Helpers/images'

export default function MicroServices() {
    return (
        <div>
            <SlimNav/>
            <Banner imgSrc = {images.millChicago} title = 'Micro Services'/>
            This is Micro Services
        </div>
    )
}
