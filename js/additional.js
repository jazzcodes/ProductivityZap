import { process } from '../lib/env.js';

const chatbotInput = document.getElementById('chatbot-input');
const chatbotResponse = document.querySelector('.chatbot-response');

const apiKey = process.env.OPENAI_API_KEY;
const url = 'https://api.openai.com/v1/completions';

function fetchBotReply() {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: `Affirm the user that the ${chatbotInput.value} would be done positively.`,
      max_tokens: 50,
    }),
  })
    .then((response) => response.json())
    .then((data) => (chatbotResponse.innerText = data.choices[0].text.trim()));
  chatbotInput.value = '';
}

chatbotInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    fetchBotReply();
  }
});
