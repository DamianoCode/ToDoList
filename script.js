 const app = Vue.createApp({
     data(){
         return{
             title:"Simple ToDoList",
             show: false,
             newTask: '',
             list:[
                 {id:1,label:"Clean room",done:true}
             ]
         }
     },
     methods: {
         saveTask() {
            this.list.push({id:this.list.lenght+1,label:this.newTask});
            this.newTask='';
         },
         toggleDone(task){
            task.done = !task.done;
         }
     }
 }).mount('#app')