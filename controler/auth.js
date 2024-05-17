const { prisma } = require('../prisma/prisma-client.js');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const signup = async (req, res) =>{
    const {login, password} = req.body;

    let user = await prisma.user.findFirst({where: {login}});
    if(user){
        return res.status(400).json({ message: "Такой пользователь уже существует" });
    }

    user = await prisma.user.create({
        data:{
            login: login,
            password: bcrypt.hashSync(password, 10),
            role: "student",
        }
    })

    return res.json({user: user});
}

const login = async (req, res) =>{
    const {login, password} = req.body;

    let user = await prisma.user.findFirst({where: {login}});

    if(!user){
        return res.status(400).json({ message: "Такого пользователя не существует" });
    }
    if(!bcrypt.compareSync(password, user.password)){
        return res.status(400).json({ message: "Неверный пароль" });
    }
    const token = jwt.sign({
        userId: user.id
    }, process.env.JWT_SECRET)
    return res.json({user: user, token});
}

module.exports = { signup, login };