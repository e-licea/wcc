import React, { useEffect } from 'react'
import MainNavigator from './Home/MainNavigator'

//imports
import classic from '../img/logos/PrimeLogo.png'
import { connect } from 'react-redux'
import { init } from 'ityped';
import MainSlider from './Home/MainSlider';

function Home(props) {

    const { darkMode } = props;

    useEffect(() => {
        const iTypedHome = document.querySelector('#ityped-home');
        init(iTypedHome, {
            showCursor: false,
            strings: ['Programming Services', 'Bring visions to reality.'],


        })
    }, [])
    return (
        <div id = 'Home'>
            <section className="homeIntro">
                <div id="IntroLogo">
                    <img src={classic} alt="" />
                    <p id = 'ityped-home'></p>
                </div>
                <MainNavigator/>
                <MainSlider/>
            </section>
        </div>
    )
}

function mapStateToProps(state){
    return{
        darkMode: state.darkModeReducer.darkMode
    }
}
export default connect(mapStateToProps, {})(Home);