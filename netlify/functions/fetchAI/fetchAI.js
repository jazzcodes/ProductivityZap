import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const handler = async (event) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Be a friendly chatbot and assure the user that the task entered has been done sucessfully.`,
      max_tokens: 50,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: response.data,
      }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
