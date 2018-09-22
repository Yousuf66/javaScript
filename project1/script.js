
// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event

  document.addEventListener('DOMContentLoaded',getTasks);
  form.addEventListener('submit', addTask);
taskList.addEventListener('click',removeTask);
clearBtn.addEventListener('click',clearTask);
filter.addEventListener('keyup',filterTask);
}

function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}

// Add Task
function addTask(e) {
    if(taskInput.value === '') {
      alert('Add a task');
    }
  
    const li = document.createElement('li');

    li.className = 'collection-item';

    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="fa fa-remove"></i>';
 
    li.appendChild(link);
  
  saveTask(taskInput.value);
    taskList.appendChild(li);



    taskInput.value = '';
  
    e.preventDefault();
  }

  function saveTask(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  function removeTask(e){

    if(e.target.parentElement.classList.contains('delete-item')){
        if (confirm('are thee sure?')){
        e.target.parentElement.parentElement.remove();
        }
    }

    //we dont have an id so we pass in the whole li element and the check the text content
    removeTaskFromLocalStorage(e.target.parentElement.parentElement)
 

  }

  function removeTaskFromLocalStorage(taskItem){

    let tasks;
    if(localStorage.getItem('tasks')===null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));

    }

    tasks.forEach((task,index)=>{
        if(taskItem.textContent === task){
          tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));
     


  }

  function clearTask(){
      while(taskList.firstChild){

        taskList.removeChild(taskList.firstChild);

      }
      clearTaskFromLocalStorage();
  }

  function clearTaskFromLocalStorage(){
    localStorage.clear();
  }
  function filterTask(e){

    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task){
        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';

        }else{
            task.style.display = 'none';
        }

    })
  

  }