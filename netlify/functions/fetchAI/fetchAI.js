export { apiKey };
const apiKey = process.env.OPENAI_API_KEY;
// const apiKey = process.env.OPENAI_API_KEY;
// const handler = async (event) => {
//   const url = 'https://api.openai.com/v1/completions';

//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify({
//       model: 'text-davinci-003',
//       prompt: `Behave like a friendly chatbot. Whenever user asks to do ${chatbotInput.value},
//    affirm the user that it would be done positively.`,
//       max_tokens: 50,
//     }),
//   }).then((response) => response.json());
// };

// module.exports = { handler };
