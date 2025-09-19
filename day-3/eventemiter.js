import EventEmitter from "events";

const myevent = new EventEmitter();

myevent.on('hello',()=>{
    console.log('welcome to coding')
})

myevent.emit('hello')

class Shopping extends EventEmitter {
    item = []
    constructor() {
        super ()
    }

    additem=(item)=>{
        this.item.push(item)
        this.emit('add',item)
        
    }
    removeitem=(item)=>{
        const id = this.item.indexOf(item)
        if(id !== -1){
            this.item.splice(id,1);
            this.emit('remove',item)
        }
    }
}
const cart = new Shopping();
cart.on('add',(item)=>{console.log('item added ')})
cart.on('remove',(item)=>{console.log('item removed')})
cart.additem('apple')
cart.removeitem('apple')