const { prisma } = require('../prisma/prisma-client.js');

const news = async(req, res) =>{
    const news = await prisma.news.findMany({
        orderBy: {
            date: "desc"
        },
    });
    res.status(200).json({ news: news});
}

module.exports = { news };