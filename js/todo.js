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
    .eq('user_id', userId);
  // console.log(error);
  // console.log(todo);

  todo.forEach((task) => {
    // console.log(task.id);
    // console.log(task.task);

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
        // console.log('deleted', del.name);
        const { data: delData, delError } = await supabase
          .from('todo')
          .delete()
          .eq('id', del.name)
          .eq('user_id', userId);

        location.reload();
      });
    });

    // console.log(tasksList);
    const doneTask = document.querySelectorAll('.task .task-check .done'); // checkboxes
    // console.log(doneTask);

    async function handleCheck() {
      // console.log(tasksList);
      const taskItem = document.querySelectorAll('.task .task-check .done');
      // console.log(taskItem);

      const { data: todoNew, errorNew } = await supabase
        .from('todo')
        .select('id')
        .eq('done', 'true')
        .eq('user_id', userId);
      // console.log(errorNew);
      // console.log(todoNew);

      const todoNew2 = todoNew.map((a) => a.id);

      taskItem.forEach((t) => {
        // console.log(todoNew2);
        // console.log('true-btn-name', t.name);
        if (todoNew2.includes(Number(t.name))) {
          // console.log(t.name, 'is there');
          t.checked = true;
        } else {
          // console.log('not there');
        }
      });
    }
    // done status
    doneTask.forEach((done) => {
      // console.log(done);

      done.addEventListener('change', () => {
        // console.log('clicked');
        // console.log(done.checked);
        const taskID = done.name;
        task.done = done.checked;

        // console.log('status changed ID:', taskID);

        async function handleDone() {
          const { data: doneData, error: doneError } = await supabase
            .from('todo')
            .update({ done: done.checked })
            .eq('id', taskID)
            .eq('user_id', userId);
        }

        handleDone();
        // handleCheck();

        // console.log('new status', task.done);
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
    // console.log(taskEntered);
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
