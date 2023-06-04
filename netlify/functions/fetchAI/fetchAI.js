const apiKey = process.env.OPENAI_API_KEY;
const handler = async (event) => {
  try {
    const url =
      'https://deploy-preview-17--luxury-hotteok-fb50c4.netlify.app/.netlify/functions/fetchAI';
    const response = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: event.body,
        max_tokens: 50,
      }),
    });
    const subject = event.queryStringParameters.name || 'World';
    return {
      statusCode: 200,
      body: JSON.stringify({ response }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
