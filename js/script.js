

const { createApp } = Vue;

createApp({
  // una lista di todo
  // che posso vedere e eliminare quelli che ho già fatto

  data() {
    return {

      todos: [
        'Fare ricarica al telefono',
        'Portare il cane al parco',
        "Pushare l'esercizio del mattino",
        'Inviare la consegna del nuovo esercizio',
        "Chiedere l'età a Danilo",
      ],
      
      // predispongo una proprietà per il nuovo todo
      newTodo: '',

      todoColor: 'purple',
      
    }
  },

  methods: {
    deleteTodo(index) {

      // elimina l'elemento dall'array all'indice che ti do io
      this.todos.splice(index, 1);

    },

    addTodo() {
      // inserire il contenuto di "newTodo" dentro il mio array di todo
      
      this.todos.push(this.newTodo);
      this.newTodo = "";
      
    },

  },

}).mount('#app')