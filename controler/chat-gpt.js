const { OpenAI } = require("openai");

const chatGpt = async(req, res) =>{
    const {prompt} = req.body;
    const openai = new OpenAI({
        apiKey: process.env['OPENAI_SECRET_KEY_API']
      });

    const chatGpt = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        base_url: "https://api.proxyapi.ru/openai/v1",
        max_tokens: 20,
        messages: [{ role: "user", content: "Say this is a test" }],
        stream: true,
        prompt: prompt,
    })
    if (chatGpt) {
        res.status(200).json({ chatgpt: chatGpt.choices[0].text});
    } else {
        return res.status(400).json({ chatgpt: chatGpt.error.message });
    }

}

module.exports = { chatGpt };