const users = require("../fake-db/users")
const jwt = require('jsonwebtoken');
const shcema=require('../helpers/validation');
const { schema } = require("../helpers/validation");

exports.fetchUser = (req, res) => {
    let response = {
        status: true
    }
    res.status(200).send(response)
}
exports.addUser = (req, res) => {
    if (req.body.username.length < 4) {
        let response = {
            status: false,
            message: 'Username 4 karakterden fazla olmali.'
        }
        res.status(200).send(response)
    } else {
        let response = {
            status: true,
            message: 'İşleminiz gerçekleşti.'
        }
        res.status(200).send(response)
    }

}
exports.put = (req, res) => {
    let response = {
        status: true
    }
    res.status(200).send(response)
}
exports.fetchDelete = (req, res) => {
    let response = {
        status: true
    }
    res.status(200).send(response)
}

exports.register = async (req, res) => {
    
    const user=req.body
    if (user) {
        const secret = "barisyalcinkose"
        const token = jwt.sign(
            { user },
            secret,
            { expiresIn: '7d' }
        )
        
        res.send({
            status: true,
            jwt: {
                token: token,
                expiresIn: '7d'
            },
            user
        })
    }
    else {
        let response = {
            status: false
        }
        res.status(200).send(response)
    }
}

exports.login = (req, res) => {

    const user = users.find((item) => (
        item.username === req.body.username &&
        item.password === req.body.password))
    if (user) {
        const secret = "barisyalcinkose"
        const token = jwt.sign(
            { user },
            secret,
            { expiresIn: '7d' }
        )
        
        res.send({
            status: true,
            jwt: {
                token: token,
                expiresIn: '7d'
            },
            user
        })
    }
    else {
        let response = {
            status: false
        }
        res.status(200).send(response)
    }
}
