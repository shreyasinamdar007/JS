const todo = ["Exercise", "Meditate", "Read", "Code", "Invest"];

const todos = [
  {
    text: "Exercise",
    completed: false,
  },
  {
    text: "Meditate",
    completed: true,
  },
  {
    text: "Read",
    completed: false,
  },
  {
    text: "Code",
    completed: true,
  },
];

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

const IncompleteTask = function (todo) {
  return todo.filter(function (todos) {
    return todos.completed === false;
  });
};

sortTodos(todos);
console.log(todos);
// console.log(IncompleteTask(todos));
// deleteTodo(todos, "Read");
// console.log(todos);
