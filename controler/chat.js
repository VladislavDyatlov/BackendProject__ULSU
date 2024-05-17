const { prisma } = require('../prisma/prisma-client.js');

const chat = async(req, res) => {
    const { name, text } = req.body;

    const chat = await prisma.chat.create({
        data: {
            name: name,
            text: text,
        },
    })

    if (chat) {
        return res.status(200).json({ message: "Ваши данные успешно отправлены" });
    } else {
        return res.status(400).json({ message: "Что-то пошло не так" });
    }
}

const chatGet = async(req, res) => {
    const chat = await prisma.chat.findMany({});
    res.status(200).json({ chat: chat});
}

module.exports = { chat, chatGet };