import React from 'react'

export default function Banner(props) {
    const { imgSrc, title } = props;



    return (
        <div id = 'Banner' style = {{backgroundImage: `url(${imgSrc})`}}>
            {title}
        </div>
    )
}
