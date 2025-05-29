function updateSummary() {
  const tasks = document.querySelectorAll('#taskList li');
  const completed = document.querySelectorAll('#taskList input[type="checkbox"]:checked');
  document.getElementById('summary').textContent = `${completed.length} of ${tasks.length} tasks completed`;
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  if (!taskInput.value.trim()) return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onchange = function () {
    span.classList.toggle('completed');
    updateSummary();
  };

  const span = document.createElement('span');
  span.textContent = taskInput.value;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.onclick = function () {
    taskList.removeChild(li);
    updateSummary();
  };

  li.append(checkbox, span, delBtn);
  taskList.appendChild(li);
  taskInput.value = '';
  updateSummary();
}
