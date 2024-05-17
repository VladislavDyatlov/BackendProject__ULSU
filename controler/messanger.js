const { prisma } = require('../prisma/prisma-client.js');

const messanger = async(req, res) =>{
    const { login } = req.body;
    const message = await prisma.user.findMany({
        where:{
            login: login
        },
        select: {
            id: true,
            login: true,
        }
    });
    if (message) {
        return res.status(200).json(message);
    } else {
        return res.status(400).json({ message: "Что-то пошло не так" });
    }
}

const messangerId = async(req, res) =>{
    const { message, name, images, chatsId } = req.body;
    const messages = await prisma.chats.create({
        data:{
            message: message,
            name: name,
            images: images,
            chatsId: chatsId
        }
    });
    if (messages) {
        return res.status(200).json(messages);
    } else {
        return res.status(400).json({ message: "Что-то пошло не так" });
    }
}

const messangerIds = async(req, res) =>{
    const { id } = req.body;
    const messages = await prisma.converstation.findUnique({
        where:{
            id: id,
        },
        include:{
            chats: {
                orderBy:{
                    date: "desc",
                }
            },
            users: true
        },
    });
    if (messages) {
        return res.status(200).json(messages);
    } else {
        return res.status(400).json({ message: "Что-то пошло не так" });
    }
}


const converstation = async (req, res) =>{
    const { ids } = req.body;
    const converstation = await prisma.converstation.create({
        data:{
            users: {
                create:{
                    idsUser: ids[0],
                    idCoonver: ids[1]
                }
            }
        },
        include:{
            users: true
        }
    })
}

const getConverstation = async (req, res) =>{
    const { id } = req.body;
    const converstation = await prisma.converstation.findMany({
        where:{
            users:{
                some:{
                    OR:[
                        {
                            idsUser: id,
                        },
                        {
                            idCoonver: id,
                        }
                    ]
                }
            }
        },
        include:{
            users: true,
            chats: true
        }
    });
    return res.status(200).json({conver: converstation});

}

module.exports = { messanger, converstation, getConverstation, messangerId, messangerIds };