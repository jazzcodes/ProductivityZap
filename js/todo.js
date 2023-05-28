import { supabase } from '../lib/client.js';

// To-do

const inputTask = document.getElementById('add-task');
const tasksList = document.querySelector('.tasks');

// fetch data from supabase & display
let userId = localStorage.getItem('userId');
async function loadData() {
  const { data: todo, error } = await supabase
    .from('todo')
    .select('*')
    .eq('user_id', userId)
    .order('id', { ascending: true });

  todo.forEach((task) => {
    //display data

    tasksList.innerHTML += `
        <li id=${task.id} class="task"> 
        <div class="task-check">
        <input type="checkbox" class="done" name="${task.id}" id=""> 
        <p class="strikethrough"> ${task.task} </p>
        </div>
        <button class="delete-task" name=${task.id}>
        <img src="../images/delete-btn.svg" alt="" class="del-icon"> 
        </button>
        </li>
        `;

    // handle delete

    const deleteBtns = document.querySelectorAll('.delete-task');

    deleteBtns.forEach((del) => {
      del.addEventListener('click', async function handleDelete() {
        const { data: delData, delError } = await supabase
          .from('todo')
          .delete()
          .eq('id', del.name)
          .eq('user_id', userId);

        location.reload();
      });
    });

    const doneTask = document.querySelectorAll('.task .task-check .done');
    // checkboxes

    async function handleCheck() {
      const taskItem = document.querySelectorAll('.task .task-check .done');

      const { data: todoDone, errorDone } = await supabase
        .from('todo')
        .select('id')
        .eq('done', 'true')
        .eq('user_id', userId);

      const todoDoneArray = todoDone.map((a) => a.id);

      taskItem.forEach((t) => {
        if (todoDoneArray.includes(Number(t.name))) {
          t.checked = true;
        }
      });
    }
    // done status
    doneTask.forEach((done) => {
      done.addEventListener('change', () => {
        const taskID = done.name;
        task.done = done.checked;

        async function handleDone() {
          const { data: doneData, error: doneError } = await supabase
            .from('todo')
            .update({ done: done.checked })
            .eq('id', taskID)
            .eq('user_id', userId);
        }

        handleDone();
      });

      handleCheck();
    });
  });

  inputTask.value = '';
}

// insert data to supabase

inputTask.addEventListener('keypress', async function insertData(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    let taskEntered = inputTask.value;

    const { data: todo, error } = await supabase.from('todo').insert([
      {
        task: taskEntered,
        user_id: userId,
      },
    ]);
    location.reload();
  }
});

loadData();
