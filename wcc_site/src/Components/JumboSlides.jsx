import React, { Component } from 'react'
import currentSlide from '../img/chiweb_logo_default.svg'

export default class JumboSlides extends Component {


    componentDidMount(){

    }

    constructor(props){
        super(props);
        this.state = {
            currentSlide: currentSlide
        }
    }

    render() {
        return (
            <div className = 'JumboSlides'>
                <div className = 'slide-show'>

                </div>
            </div>
        )
    }
}
