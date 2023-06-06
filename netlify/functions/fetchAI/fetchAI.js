import { Configuration, OpenAIApi } from 'openai';
import { chatbotInput } from '../../../js/additional.js';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const handler = async (event) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Behave like a friendly chatbot.
    Whenever user asks to do ${chatbotInput.value},
    affirm the user that it would be done positively.`,
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
