import React, { useEffect } from 'react'

//imports
import { connect } from 'react-redux'
import { init } from 'ityped';
    //components
import MainSlider from './MainSlider';
import MainNavigator from './MainNavigator'


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
            <section className="homeIntro">
                <div id="IntroLogo">
                    <h2 className = 'SheepingCats'>Windy City Code</h2>
                    <p id = 'ityped-home'></p>
                </div>
                <MainNavigator/>
                <MainSlider/>
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