import React from 'react'
import Banner from '../../Helpers/Banner'
import SlimNav from '../../Helpers/SlimNav'
import images from '../../Helpers/images'

export default function ProjectGallery() {
    return (
        <div>
            <SlimNav/>
            <Banner imgSrc = {images.winterChiHedge} title = 'Project Gallery'/>
            This is project gallery
        </div>
    )
}
