const https = require('http');

const url = 'http://jsonplaceholder.typicode.come/posts';

https.get(url, (response) => {
    let result = '';
    response.on('data', (chunk =>{
        result += chunk;
    }));
    response.on('end', () => {
        try{
            console.log(JSON.parse(result));
        }catch(e){
            console.error(e);
        }
    });

    response.on('error', (err) => {
        console.error(err);
    })
});


// const https = require('https');

// const url = 'https://about.gitlab.com';

// https.get(url, (response) => {
//     response.on('data', (chunk =>{
//         console.log(chunk.toString('utf8'));
//     }));
//     response.on('end', () => {
//         console.log('response has ended.');
//     });

//     response.on('error', (err) => {
//         console.error(err);
//     })
// });


// https(url, (response) => { // POST Example
//     response.on('data', (chunk =>{
//         console.log(chunk.toString('utf8'));
//     }));
//     response.on('end', () => {
//         console.log('response has ended.');
//     });

//     response.on('error', (err) => {
//         console.error(err);
//     })
// });