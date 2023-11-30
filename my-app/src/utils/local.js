
let array_todos = [
    { 
      createdAt: new Date(), 
      title: "Tugas Sekolah", 
      todo: "Tugas Fisika dan Biologi" 
    },
    { 
      createdAt: new Date(), 
      title: "Tugas Rumah", 
      todo: "Menyapu" 
    },
    { 
      createdAt: new Date(), 
      title: "Tugas Sehari-Hari", 
      todo: "Membereskan kamar" 
    },
];

function addTodo(todo) {
  array_todos = [...array_todos, todo];
}

function getTodos() {
    return array_todos;
}

function handleDeleteTodo(deleteTodo) {
    array_todos = array_todos.filter(todo => todo !== deleteTodo )
}

export { getTodos, handleDeleteTodo, addTodo };