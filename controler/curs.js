const { prisma } = require('../prisma/prisma-client.js');

const curs = async(req, res) =>{
    const curs = await prisma.curs.findMany({
        include:{
            question: {
                include:{
                    know: true
                }
            },
            youtube: true,
        }
    });
    res.status(200).json({ curs: curs});
}

const cursID = async(req, res) => {
    const id = req.params.id;

    const curs = await prisma.curs.findUnique({
        where: {
            id,
        },
        include: {
            question: {
                include:{
                    know: true
                }
            },
            youtube: true,
        }
    });
    res.status(200).json(curs);
}

module.exports = { curs, cursID };