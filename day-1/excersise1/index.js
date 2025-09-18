import Shopping from './shopping.js';
import readline from 'readline';
import Product from './product.js';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})
const cart = new Shopping();

// class Product {
//     constructor(props) {
//         Object.defineProperty(this, 'name', {
//             value: props.name,
//             writable: false,
//             enumerable: true,
//             configurable: false
//         })
//         Object.defineProperty(this, 'price', {
//             value: props.price,
//             writable: true,
//             enumerable: true,
//             configurable: false
//         })
//     }


// }


// class Shopping {
//     constructor() {
//         this.products = []
//     }

//     add(product) {
//         this.products.push(product)
//         console.log(`product has been pushed - > ${product.name}`)
//         console.log(`total price after adding ${product.name}-> ${this.total()}`)
//     }

//     remove(product) {
//         this.products = this.products.filter(pro => pro.name != product)
//         console.log(`product has been removed  - > ${product}`)
//         console.log(`total price after removing ${product}-> ${this.total()}`)
//     }
//     total() {
//         let total = 0;
//         for (let i of this.products) {
//             total += i.price;
//         }
//         return total
//     }
// }

// const product1 = new Product({name:'laptop',price:500})
// const product2 = new Product({name:'car',price:5000})
// cart.add(product1)
// cart.add(product2)
// product1.name='trying to change';
// console.log('after name change')
// console.log(product1)
// product1.price=5000
// console.log('after price change')
// console.log(product1)
// cart.remove('car');

function getInputFromUser() {
    rl.question('do u want to add or remove product or exit: ', (action) => {
        switch (action) {
            case 'add':
                rl.question('enter product name: ', (name) => {
                    rl.question('enter product price: ', (price) => {
                        const product = new Product({ name: name, price: parseInt(price) })
                        cart.add(product)
                        getInputFromUser()
                    })
                })
                break;
            case 'remove':
                rl.question('enter product name to remove: ', (name) => {
                    cart.remove(name)
                    getInputFromUser()
                })
                break;
            case 'exit':
                rl.close()
                break;

            default: {
                console.log('please choose option from the given string ')
                getInputFromUser()
            }
        }
    })
}
getInputFromUser()
