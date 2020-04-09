const TODOS_URL = `https://jsonplace-univclone.herokuapp.com/todos`;

function fetchTodos() {
  return fetch("https://jsonplace-univclone.herokuapp.com/todos")
    .then(function(response) {
      // This converts the response body to an object, returning is crucial here
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      renderAllTodos(data);

      // do something with the data
    })
    .catch(function(error) {
      console.error(error);
    });
}

function renderAllTodos(todos) {
  todos
    .filter(function(todo) {
      return todo.completed;
    })
    .forEach(function(todo) {
      $(".complete").append(renderTodo(todo));
    });
    todos
    .filter(function(todo) {
      return todo.completed;
    })
    .forEach(function(todo) {
      $(".complete").append(renderTodo(todo));
    });
}

function renderTodo(todo) {
  return $(`<div class="todo">
    <h3>TITLE TITLE TITLE</h3>
    <footer>
<button>${todo.completed ? "DONE" : "UNDO"}</button>
    </footer>
  </div>`);
}

function bootstrap() {
  fetchTodos();
}

bootstrap();
