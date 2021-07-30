 const app = Vue.createApp({
     data(){
         return{
             title:"Simple ToDoList",
             newTask: '',
             list:[
                 {id:1,label:'Create website'},
                 {id:2,label:'Learn'},
                 {id:3,label:'Clean room'},
             ]
         }
     },
     methods: {
         saveTask() {
            this.list.push({id:this.list.lenght+1,label:this.newTask});
            this.newTask="";
         }
     }
 }).mount('#app')