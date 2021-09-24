import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { NavItem } from 'reactstrap';
import { store } from '../../App'
import { TOGGLE_DARK_MODE } from '../Reducers/darkModeReducer'
import { setTheme } from './Themes';

//redux


function ToggleDarkMode(props) {
    const { darkMode } = props;

    console.log(darkMode)
    
    const [ togClass, setTogClass ] = useState('dark');
    let theme = localStorage.getItem('theme');


    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
            store.dispatch({type: TOGGLE_DARK_MODE, payload: true})
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
            store.dispatch({type: TOGGLE_DARK_MODE, payload: false})
        }

    }, [theme])


    function handleOnClick(){
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
    }

    return (
        <div className="container--toggle">
            {
                togClass === "light" ?
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked />
                :
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} />
            }
            <label htmlFor="toggle" className="toggle--label">
            </label>
        </div>
    )
}

function mapStateToProps(state){
    return{
        darkMode: state.darkModeReducer.darkMode
    }
}

export default connect(mapStateToProps, {})(ToggleDarkMode);

