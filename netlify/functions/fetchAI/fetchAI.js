const apiKey = process.env.OPENAI_API_KEY;

const handler = async (event) => {
  try {
    const url = 'https://api.openai.com/v1/completions';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/json',
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: event.body,
        max_tokens: 50,
      }),
    }).then((response) => response.json());
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
