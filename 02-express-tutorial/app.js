const express = require('express')
const app = express()
const {products} = require('./data')

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products/', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts)
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}....`)
})