import React, { useEffect } from 'react'

//imports
import { connect } from 'react-redux'
import { init } from 'ityped';
import images from '../../Helpers/images';

    //components
import MainSlider from './MainSlider';
import MainNavigator from './MainNavigator'
import WhoIs from './WhoIs';
import Overview from './Overview';


function Home(props) {

    const { darkMode } = props;

    
    useEffect(() => {
        const iTypedHome = document.querySelector('#ityped-home');
        init(iTypedHome, {
            showCursor: false,
            strings: ['Programming Services', 'Bring visions to reality.']
        })
    }, [])


    return (
        <div id = 'Home'>
            <section id="homeIntro">
                <div id="IntroLogo">
                    <img src = {darkMode?images.wccDark:images.wccLight} alt="" />
                    <p id = 'ityped-home'></p>
                </div>
                <MainNavigator/>
                <MainSlider/>
            </section>
            <section id = 'homeContent'>
                <Overview/>
                <WhoIs/>
            </section>
        </div>
    )
}


//Redux state map
function mapStateToProps(state){
    return{
        darkMode: state.darkModeReducer.darkMode
    }
}
export default connect(mapStateToProps, {})(Home);