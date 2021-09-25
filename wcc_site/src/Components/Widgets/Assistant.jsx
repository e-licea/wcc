import { init } from 'ityped';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function Assistant(props) {

    //const [editing, setEditing] = useState(false);
    //const [command, setCommand] = useState('');
    const { time } = props;  

    useEffect(() => {
        const textTerm = document.querySelector('#text-term');
        const dateTerm = document.querySelector('#dateTerm');

        init(textTerm, {
            showCursor: false,
            loop: false,
            strings: [' Good Morning Chicago!'],
            onFinished: function(){
                init(dateTerm, {
                    showCursor: false,
                    startDelay: 1000,
                    loop: false,
                    strings: [`wcc@assistant:～$ Today is ${time.dayOfWeek}, ${time.date}.`]
                })
            }
        })

    }, [])
    // function onClick(e){
    //     return setEditing(!editing);
    // }

    // function onChange(e){
    //     return {[e.target.name]: e.target.value}
    // }

    return (
        <div id = 'Assistant'>
            <div id="topPanel">x</div>
            <div id = 'terminal'>
                
                <p id = 'text-term'>wcc@assistant:～$ </p>
                <p id="dateTerm"></p>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        time: state.appReducer
    }
}

export default connect(mapStateToProps, {})(Assistant);