const { createApp } = Vue
    
  createApp({
    data() { 
        return {
            todoList: [
                {azione: "Accendere il fuoco", stato: true },
                {azione: "Scaldare l'acqua", stato: true },
                {azione: "Mettere il sale", stato: false },
                {azione: "Mettere la pasta", stato: true},
            ]
        }
    },
    methods: {
        removeTodo(posizione) {
            this.todoList.splice(posizione, 1);
        }
    }
  }).mount("#app");
