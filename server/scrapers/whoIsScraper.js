const axios = require('axios');
const cheerio = require('cheerio');

module.exports = parser;



async function parser (domain){
    let url = `https://www.whois.com/whois/${domain}`
    let result = []

    await axios.get(url)
    .then(res=>{
        if (res.status === 200){
            const $ =  cheerio.load(res.data);
            let nodeChildren = $('.df-raw')[0].children
            nodeChildren.map(async node=>{
                if(node.type === 'text'){
                    result.push(node.data)
                }
            })
        }
    }).catch(err=>{
        return err
    })

    return result
}

parser('windycitycode.com')