const { createApp } = Vue
    
  createApp({
    data() { 
        return {
            todoList: [
                {azione: "Accendere il fuoco", stato: true },
                {azione: "Scaldare l'acqua", stato: true },
                {azione: "Mettere il sale", stato: false },
                {azione: "Mettere la pasta", stato: true},
            ],
            newElement: {
                azione: "",
                stato: false
            }
        }
    },
    methods: {
        removeTodo(posizione) {
            this.todoList.splice(posizione, 1);
        },
        addElement() {
            if (this.newElement.text.length >= 5) {
                
                let newElement = {
                    azione: this.newElement.text,
                    stato: false
                };
                
                this.todoList.unshift(newElement);
                this.newElement.text = "";
            }
        },
    }
  }).mount("#app");
