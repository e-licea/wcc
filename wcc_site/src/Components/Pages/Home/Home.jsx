import React, { useEffect } from 'react'

//imports
import { connect } from 'react-redux'
import { init } from 'ityped';
    //components
import MainSlider from './MainSlider';
import MainNavigator from './MainNavigator'
import WhoIs from './WhoIs';


function Home(props) {

    const { darkMode } = props;

    
    useEffect(() => {
        const iTypedHome = document.querySelector('#ityped-home');
        init(iTypedHome, {
            cursorChar: '_',
            strings: ['Programming Services', 'Bring visions to reality.']
        })
    }, [])


    return (
        <div id = 'Home'>
            <section id="homeIntro">
                <div id="IntroLogo">
                    <h2 className = 'SheepingCats'>Windy City Code</h2>
                    <p id = 'ityped-home'></p>
                </div>
                <MainNavigator/>
                <MainSlider/>
            </section>
            <section id = 'homeContent'>
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