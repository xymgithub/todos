var vm = new Vue({
    el:'#app',
    data: {
        newtodo: '',
        toggleAll: false,
        todos:[
            {id: 1,desc:'吃饭',isDone: false,sh: false},
            {id: 2,desc:'睡觉',isDone: false,sh: false}
        ]
       
    },
    methods:{
        enter(){
            if(!this.newtodo){return}
            var newtodo = {
                id: +new Date(),
                desc: this.newtodo,
                isDone: false
            }
            this.todos.unshift(newtodo)
            this.newtodo = null;
        },
        del(item){
           var index =this.todos.indexOf(item)
           this.todos.splice(index,1)
        },
        toggleAllHandle() {
            // console.log(this.toggleAll)
            // 让this.todos中的每一项的completed变为this.toggleAll
            this.todos.forEach((item, index) => {
                item.isDone = this.toggleAll   
            })
        },
        btnAll(){
            this.todos.forEach((item,index)=>{
                
                this.toggleAll = item.isDone ?true:false
            })
        }
        
    }
})