const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev }) // Consultar bien esto, creo que next() es un middleware. dev es un booleano? porque se lo pasamos a next().
const handle = app.getRequestHandler()

// Esto es una promise de ES6??? me parece que si jeje
app.prepare()
.then(() => {
    const server = express()

    // get(path, callback)
    server.get('*', (req, res) => {
        return handle(req, res)
    })

    // listen(nroPuerto, callback)
    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1) // Termino con error.
})
