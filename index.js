const express = require('express')

const app = express()

app.listen(3000)

app.get('/', (req, res) => {
    res.send('<h2>Hello</h2>')
})

app.get('/test', (req, res) => {
    res.send('Test')
})

