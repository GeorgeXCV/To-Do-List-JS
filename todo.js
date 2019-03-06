// V1
todos = ['item 1', 'item 2', 'item 3']
console.log('My Todos:', todos)
todos.push('item 4')
todos[0] = 'item 1 updated'
todos.splice(0, 1)

function displayTodos() {
    console.log('My todos:', todos);
}

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos(); 
}

function deleteTodo(position) {
    todos.splice(position, 1)
    displayTodos();
}

// V2

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos(); 
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};


