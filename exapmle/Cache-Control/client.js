
const origin = 'http://127.0.0.1:8080';

fetch(`${origin}/test`,{
    headers:{
        'Cache-Control':'max-age=3',
    }
}).then(res=>{
    // debugger
})