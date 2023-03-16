

const { createApp } = Vue;

createApp({
  // una lista di todo
  // che posso vedere e eliminare quelli che ho già fatto

  data() {
    return {
      todos: [
        {
          text: 'Pagare il bollo della macchina',
          done: true
        },
        {
          text: 'Caricare la lezione su Drive',
          done: false
        },
        {
          text: 'Consegnare locandine per sabato',
          done: true
        },
        {
          text: 'Portare a spasso il cane',
          done: true
        },
        {
          text: 'Comprare Hoguorz Legasi',
          done: false
        },
      ],
      
      // newTodoText: '',

      newTodo: {
        text: '',
        done: false
      },


    }
  },


  methods: {

    // // soluzione passando l'intero oggetto todo
    toggleTodo(todo) {
      console.log(todo);
      
      // if(todo.done == true) {
      //   todo.done = false;
      // } else {
      //   todo.done = true;
      // }

      // forma contratta
      todo.done = !todo.done;

    },

    // // soluzione usanto l'indice
    // toggleTodo(todoIndex) {

    //   this.todos[todoIndex].done = !this.todos[todoIndex].done;

    // },

    
    deleteTodo(todoIndex) {
      
      // per cancellare un elemento da un array dobbiamo usare il metodo splice()
      this.todos.splice(todoIndex, 1);

    },

    addTodo() {
      // aggiunge un todo con il testo che ha indicato l'utente nell'input

      // metodo 1: usiamo un nuovo oggetto in cui inseriamo il testo dell'utente, che poi pusheremo
      // const newTodo = {
      //   text: this.newTodoText,
      //   done: false,
      // };
      
      // metodo 2: aggiungiamo direttamente l'oggetto che abbiamo nei data, a cui stiamo facendo in automatico 
      //  il bind dall'html alla proprietà text
      // aggiungo l'oggetto all'array dei todo

      // super bonus: controllo del todo vuoto da non aggiungere
      if(this.newTodo.text == "") {

        alert("non puoi inserire un todo vuoto");

        // // metodo avanzato:
        // // ricordiamoci che quando in una funzione becchiamo il return, la funzione restituisce il valore
        // // e chiude l'esecuzione
        // // questo ci serve SOLO per non eseguire il resto del codice presente in questa funzione
        // return false;
        
      } else {
        // in caso l'utente abbia scritto qualcosa, per sicurezza svuotiamo la stringa

        this.todos.push(this.newTodo);


        // lo ricreiamo da zero
        this.newTodo = {
          text: '',
          done: false
        }

        // cancello il contenuto del campo di input
        // questo non ci serve se abbiamo lavorato col metodo 2
        // this.newTodoText = '';
      }

      
      

    }

  },

}).mount('#app')