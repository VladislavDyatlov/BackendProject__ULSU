const { prisma } = require('../prisma/prisma-client.js');

const comment = async(req, res) => {
    const { images, name, comment, curs, img } = req.body;

    const comments = await prisma.comment.create({
        data: {
            images: images,
            name: name,
            comment: comment,
            curs: curs,
            img: img,
        },
    })

    if (comments) {
        return res.status(200).json({ message: "Ваши данные успешно отправлены" });
    } else {
        return res.status(400).json({ message: "Что-то пошло не так" });
    }
}

const commentGet = async(req, res) => {
    const comments = await prisma.comment.findMany({});
    res.status(200).json({ comment: comments});
}

module.exports = { comment, commentGet };