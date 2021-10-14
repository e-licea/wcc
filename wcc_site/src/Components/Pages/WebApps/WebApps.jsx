import React from 'react'
import Banner from '../../Helpers/Banner'
import SlimNav from '../../Helpers/SlimNav'
import images from '../../Helpers/images'

export default function WebApps() {
    return (
        <div>
            <SlimNav/>
            <Banner imgSrc = {images.chiTrump} title = 'Web Applications'/>
            This is Web Apps.
        </div>
    )
}
