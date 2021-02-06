const http = require('http')

const server  = http.createServer((req,res)=>{
    console.log(`>>>Icoming request`)
    console.log(` method: ${req.method}     Url: ${req.url}` )

    if (req.method === 'POST') {
        let body = ''
        req.on('end',()=>{
            console.log(body)
            const userName = body.split('=')[1]
            res.end(`<h1>Created user ${userName}</h1>`)
            
        })
        req.on('data',chunk =>{
            body += chunk
        })
    } else {
        res.setHeader('Content-Type','text/html')
        res.end(`   <form method='POST'>
                        <input type='text' name='username'>
                        <button type='submit'>Create</button>
                    </form>`)
    }

})

server.listen(5000)
