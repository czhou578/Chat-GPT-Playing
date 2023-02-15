const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

async function test() {
    const configuration = new Configuration({
      apiKey: process.env.API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Describe the color red to a blind person",
      temperature: 0,
      max_tokens: 100,
    })

    console.log(response.data.choices)
}

test()
