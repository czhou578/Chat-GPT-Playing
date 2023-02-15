const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

console.log(process.env.API_KEY)

async function test() {
    const configuration = new Configuration({
      apiKey: process.env.API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Say this is a test",
      temperature: 0,
      max_tokens: 7,
    })

    console.log(response)
}

test()
