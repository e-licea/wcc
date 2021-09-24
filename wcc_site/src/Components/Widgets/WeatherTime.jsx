import React from 'react';
import { connect } from 'react-redux';

function WeatherTime(props) {

    const { time } = props;    
    console.log(time);
    return (
        <div id = 'WeatherTime'>
            <h5>Good Morning Chicago!</h5>
            <p>Today is, {time.dayOfWeek}</p>
            <p>date: {time.date}</p>
            <p>Time: {time.time}</p>
            <p>Temp: {time.weather}°</p>
        </div>
    )
}

function mapStateToProps(state){
    
    return{
        time: state.appReducer
    }
}

export default connect(mapStateToProps, {})(WeatherTime);