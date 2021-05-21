import React, { Component } from 'react'
import currentSlide from '../img/wcc-laser-text.svg'
import logo from '../img/primeLogo.svg';

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
                    <img src={logo} alt="" />
                </div>
            </div>
        )
    }
}
