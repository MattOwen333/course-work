let pendingTodos, completedTodos, expiredTodos;

let allTodos = [
  { title: "dog", dueDate: "02-13-2029", discription: "ok", isComplete: true },
  {
    title: "whatever",
    dueDate: "02-13-2029",
    description: "walk dog",
    isComplete: false
  },
  {
    title: "ok",
    dueDate: 02 - 13 - 2029,
    description: "yep",
    isComplete: false
  },
  {
    title: "yeah",
    dueDate: "02-13-2029",
    description: "yeah",
    isComplete: false
  },
  {
    title: "run",
    dueDate: "02 - 13 - 2029",
    description: "whatever",
    isComplete: true
  },
  { title: "jog", dueDate: "02-13-2029", discription: "yeah", isComplete: true }
];

function createElementFromTodo(todo) {
  const todoVar = $(`<div class="todo">
  <h3><span class="title">${todo.title}</span><span class="due-date">${
    todo.dueDate
  }</span></h3>
  <pre>${todo.description}</pre>
  <footer class="actions">
    ${
      todo.isComplete === false
        ? `<button class="action complete">Complete</button>`
        : ""
    } 
    <button class="action delete">Delete</button>
  </footer>
</div>`);
  todoVar.data("todo", todo);
  return todoVar;
}

$(".left-drawer").click(function(event) {
  if ($(event.target).hasClass("left-drawer")) {
    $("#app").toggleClass("drawer-open");
  }
});

function renderTodos() {
  $("main .content").empty();
  pendingTodos.forEach(function(todo) {
    createElementFromTodo(todo).appendTo($(".pending-todos"));
  });
  completedTodos.forEach(function(todo) {
    createElementFromTodo(todo).appendTo($(".completed-todos"));
  });
  expiredTodos.forEach(function(todo) {
    createElementFromTodo(todo).appendTo($(".expired-todos"));
  });

  // allTodos.forEach(todo => {
  //   if (todo.isComplete) {
  //     createElementFromTodo(todo).appendTo($(".completed-todos"));
  //   } else {
  //     createElementFromTodo(todo).appendTo($(".pending-todos"));
  //   }
  // });
}

//   <div class="todo">
//   <h3><span class="title">Open the left drawer</span><span class="due-date">2/20/2020, 3:23:56 PM</span></h3>
//   <pre>Click on the left below the icons to expand the left drawer

// When you're done, click complete on this todo.</pre>
//   <footer class="actions">
//     <button class="action complete">Complete</button>
//     <button class="action delete">Delete</button>
//   </footer>
// </div>
splitTodos();
renderTodos();

$(".add-todo").click(() => {
  $(".modal").addClass("open");
});

$(".create-todo").click(event => {
  event.preventDefault();
  allTodos.unshift(createToDoFromForm());
  $(".todo-form").trigger("reset");
  $(".modal").removeClass("open");
  splitTodos();
  renderTodos();
});

$(".cancel-create-todo").click(() => {
  $(".modal").removeClass("open");
});

function createToDoFromForm() {
  const form = $(".todo-form");
  const dueDate = new Date(form.find("#todo-due-date").val());
  return {
    title: form.find("#todo-title").val(),
    dueDate: dueDate.toLocaleString(),
    description: form.find("#todo-description").val(),
    isComplete: false
  };
}

$("main").on("click", ".action.complete", function() {
  const close = $(this).closest(".todo");
  const closeData = close.data("todo");
  closeData.isComplete = true;
  splitTodos();
  renderTodos();
});

function isCurrent(todo) {
  const todoDueDate = new Date(todo.dueDate);
  const now = new Date();
  console.log(todoDueDate, now);
  return now < todoDueDate;
}

function splitTodos() {
  pendingTodos = allTodos.filter(function(value) {
    return !value.isComplete && isCurrent(value);
  });

  completedTodos = allTodos.filter(function(value) {
    return value.isComplete;
  });

  expiredTodos = allTodos.filter(function(value) {
    return !value.isComplete && !isCurrent(value);
  });
}
