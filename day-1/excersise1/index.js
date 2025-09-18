class Product {
    constructor(props){
        Object.defineProperty(this,'name',{
            value:props.name,
            writable:false,
            enumerable:true,
            configurable:false
        })
        Object.defineProperty(this,'price',{
            value:props.price,
            writable:true,
            enumerable:true,
            configurable:false
        })
    }

    
}
  

class Shopping {
    constructor(){
        this.products=[]
    }

    add(product){
        this.products.push(product)
        console.log(`product has been pushed - > ${product.name}`)
        console.log(`total price after adding ${product.name}-> ${this.total()}`)
    }

    remove(product){
        this.products=this.products.filter(pro => pro.name != product)
       console.log(`product has been removed  - > ${product}`)
        console.log(`total price after removing ${product}-> ${this.total()}`)
    }
    total(){
        let total = 0;
        for (let i of this.products ){
            total+=i.price;
        }
        return total

        
    }

}
const cart = new Shopping();
const product1 = new Product({name:'laptop',price:500})
const product2 = new Product({name:'car',price:5000})
cart.add(product1)
cart.add(product2)
product1.name='trying to change';
console.log('after name change')
console.log(product1)
product1.price=5000
console.log('after price change')
console.log(product1)
cart.remove('car');

