const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  // Toggle completed on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = '×';
  delBtn.className = 'delete-btn';
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    taskList.removeChild(li);
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = '';
}

addBtn.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
