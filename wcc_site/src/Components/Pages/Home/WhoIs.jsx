import React, { useState } from 'react'


export default function WhoIs(props) {
    const [results, setResults] = useState(false);

    return (
        <div id = 'WhoIs'>
            {
                results?
                null
                :
                <WhoIsTool/>
            }
        </div>
    )
}


function WhoIsTool(){

    const [domain, setDomain] = useState('');
    const [loading, setLoading] = useState(false);

    function onChange(e){
        console.log(domain)
        return setDomain(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault();
        setLoading(true)
        //axios call here.
    }

    return(
        <div id = 'WhoIsTool'>
            <h3>Windy City Code WHOIS tool!</h3>
            <p>Try out our WHOIS tool. find out if your domain is available.</p>
            <input 
            onChange = {onChange}
            value = {domain}
            name = 'domain'
            />
            <button 
            onClick ={onSubmit} 
            disabled='true'
            >Search</button>
        </div>
    )
}