const { prisma } = require('../prisma/prisma-client.js');

const profile = async(req, res) => {
    const { images, name, bithday, phone, email, userId } = req.body;

    const profile = await prisma.profile.create({
        data: {
            images: images,
            name: name,
            bithday: bithday,
            phone: phone,
            email: email,
            userId: userId
        },
    })

    if (profile) {
        return res.status(200).json({ message: "Ваши данные успешно обновлены" });
    } else {
        return res.status(400).json({ message: "Что-то пошло не так" });
    }
}

const profileGet = async(req, res) => {
    const {userId} = req.body;
    const profile = await prisma.profile.findMany({
        where:{
            userId: userId,
        }
    });
    res.status(200).json({ profile: profile});
}

module.exports = { profile, profileGet };