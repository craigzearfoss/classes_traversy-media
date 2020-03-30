// here is a function that we are going to create an interface for
function showTodo(todo: {title: string, text: string}) {
    console.log(todo.title+': '+todo.text);
}

let myTodo = {title: 'Trash', text: 'Take out the trash'}

showTodo(myTodo);