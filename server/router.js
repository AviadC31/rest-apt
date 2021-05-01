const express = require('express')
const data = require("./data.json")
const fs = require('fs')
const router = express.Router()

router.get('/employee/:firstName', (req, res) => {
    const found = data.find(r=> r.firstName === req.params.firstName )
    found ? res.status(200).send(found)
        : res.status(404).end("employee doesn't exist")
})

router.get('/employees', (req, res) => {
    data ? res.status(200).send(data)
        : res.status(500).end("error occuerd")
})

router.post('/employee', (req, res) => {
    const employee = req.body
    if(employee){
            employee['id'] = data.length + 1
            data.push(employee)
            console.log(data)
            fs.writeFile('data.json', JSON.stringify(data), (err) => {
            if(err) res.end(err)
            else res.status(200).send('Employee info has been saved!')
        })
    } else res.status(404).end('saving error')
})

router.put('/employee/:firstName', (req, res) => {
    const { firstName } = req.params 
    const idFound = data.findIndex(r => r.firstName === firstName)
    if(idFound !== undefined){
            data[idFound][`${req.body.field}`] = req.body.value
            fs.writeFile('data.json', JSON.stringify(data), (err) => {
            if(err) res.end(err)
            else res.status(200).send('Employee info has been saved!')
        })
    } else res.status(404).end('saving error')
})

router.delete('/employee/:firstName', function (req, res) {
    const { firstName } = req.params 
    const idFound = data.findIndex(r => r.firstName === firstName)
    if(idFound !== undefined){
        data.splice(idFound , 1)
        fs.writeFile('data.json', JSON.stringify(data), (err) => {
        if(err) res.end(err)
        else res.status(200).send('Employee info has been removed succecfully')
    })
} else res.status(404).end('deleting error')

})
module.exports = router