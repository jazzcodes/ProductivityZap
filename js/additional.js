import { supabase } from '../lib/client.js';
// import { process } from '../lib/env.js';
//  Note: Change to dotenv package code

const chatbotInput = document.getElementById('chatbot-input');
const chatbotResponse = document.querySelector('.chatbot-response');

async function fetchBotReply() {
  chatbotResponse.innerText = 'Loading...';
  // const url = 'https://api.openai.com/v1/completions';
  const url =
    'https://deploy-preview-17--luxury-hotteok-fb50c4.netlify.app/.netlify/functions/fetchAI';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'text/plain',
      'Access-Control-Allow-Origin': url,
    },
    body: chatbotInput,
  });
  const data = await response.json();
  chatbotResponse.innerText = data.reply.choices[0].text.trim();
  console.log(data);
  let userId = localStorage.getItem('userId');

  if (
    chatbotInput.value.includes('todo') &&
    chatbotInput.value.includes('add')
  ) {
    const taskAdded = chatbotInput.value
      .match(/"(\\.|[^"\\])*"/g)[0]
      .replace(/['"]+/g, '');

    async function addTaskAI() {
      const { data: todo, error } = await supabase.from('todo').insert([
        {
          task: taskAdded,
          user_id: userId,
        },
      ]);
    }
    addTaskAI();
  }

  if (
    chatbotInput.value.includes('note') &&
    chatbotInput.value.includes('add')
  ) {
    const noteHeadingAdded = chatbotInput.value
      .match(/"(\\.|[^"\\])*"/g)[0]
      .replace(/['"]+/g, '');

    const noteContentAdded = chatbotInput.value
      .match(/"(\\.|[^"\\])*"/g)[1]
      .replace(/['"]+/g, '');

    async function addNoteAI() {
      const { data: noteData, error: noteError } = await supabase
        .from('notes')
        .insert([
          {
            heading: noteHeadingAdded,
            content: noteContentAdded,
            user_id: userId,
          },
        ]);
    }
    addNoteAI();
  }
  chatbotInput.value = '';
  chatbotResponse.style.display = 'initial';
}

chatbotInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    fetchBotReply();
  }
});

// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${apiKey}`,
//   },
//   body: JSON.stringify({
//     model: 'text-davinci-003',
//     prompt: `Behave like a friendly chatbot.
//     Whenever user asks to do ${chatbotInput.value},
//     affirm the user that it would be done positively.`,
//     max_tokens: 50,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => (chatbotResponse.innerText = data.choices[0].text.trim()));

export { chatbotInput as chatbotInput };
