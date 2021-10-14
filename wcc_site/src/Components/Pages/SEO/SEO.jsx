import React from 'react'
import Banner from '../../Helpers/Banner'
import SlimNav from '../../Helpers/SlimNav'
import images from '../../Helpers/images'

export default function SEO() {
    return (
        <div>
            <SlimNav/>
            <Banner  imgSrc = {images.diamondChi} title = 'Search Engine Optimization'/>
            This is SEO
        </div>
    )
}
