class Shopping {
    constructor() {
        this.products = []
    }

    add(product) {
        this.products.push(product)
        console.log(`product has been pushed - > ${product.name}`)
        console.log(`total price after adding ${product.name}-> ${this.total()}`)
    }

    remove(product) {
        this.products = this.products.filter(pro => pro.name != product)
        console.log(`product has been removed  - > ${product}`)
        console.log(`total price after removing ${product}-> ${this.total()}`)
    }
    total() {
        let total = 0;
        for (let i of this.products) {
            total += i.price;
        }
        return total
    }
}

export default Shopping